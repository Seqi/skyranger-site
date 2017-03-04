# Writing an XCOM2 Character Pool bin

With a soldier reading in, I wanted to try and replicate the file exactly, by
writing individual properites following the patterns mentioned in the reader
post. The goal was to loop through identical properties, writing them to a buffer,
and have it produce a bin file identical to one produced by XCOM2.

## Property Bag
Recording a list of properties was the priority, as you cannot write a custom
soldier without a list of possible properties for them. As I wanted to replicate
a soldier file with a single soldier, the property list began with only one
property in each.

Each property matched XCOM2's, containing a name, a type and a value. This was
expanded by the value being an array of values, allowing us to choose one at
random. If these values were in the matching order to what XCOM2 expects, we
could simply iterate over them, write the property to the buffer based on the
type (and the rules mentioned in the reader post), and the read process should
be reversed.

When the buffer was produced, the original file was read in, and their buffers
compared, which thankfully, matched.

## Custom Properties
The matching binary was proof that the writer following the same rules as the
reader produced the desired results. I now needed to be able to overwrite
certain properties, such as the name and the background text. This is the data
I would expect from a call to the API, containing details regarding the soldiers
to create.

This was originally an object with properties with plain names; "FirstName",
"NickName" etc. A map was then produced to map these to XCOM2 properties.

    var soldier = {
      FirstName: "Test",
      LastName: "Soldier"
    }
    var map = {
      "FirstName" : "strFirstName",
      "LastName" : "strLastName"
    }

The custom object would be read in, each property iterated over, retrieving the
matching XCOM2 property name via the map, and then push the value in the custom
object into the value array of the property bag, which would contain only
that value.

While this approach worked, I felt like I could save a step by simply matching
the property names in the custom object to that of the XCOM2 property bag.

    var soldier = {
      strFirstName : "Test",
      strLastName : "Soldier"
    }

This allowed me to simply find the key of the property in the custom object,
find the matching property in the XCOM2 property bag based on that name, and
push the value in.

## Property Dependency
At this point, I could start populating more values into the propety bag. Rather
than having one value per property, I could start putting more in. As this was
happening, I started noticing an issue. Some properties were dependant on others.
These were mainly related to race and gender. For example, you could not have
a female with a beard, or race set to African but an Asian head value.

As the property bag for soldier-related properties require the soldier's
custom object (to populate name, etc before returning), we should be able to
apply some logic to ensure only valid properties are available.

### Gender
Until XCOM start hiring bearded women, we need to restrict properties such as
facial hair, or hair, to female-specific options. Hair is a good example, as
each gender has its own set of possible hair options.

In the property bag, each gender-specific properties can be marked with a flag,
and rather than a list of values; a list of female values and male values can
be populated in separate arrays. Then, when the property bag is retrieved,
the properties can be iterated through. Any properties with this gender flag
will contain `maleVals` and `femaleVals`. We can then populate `vals` with
the appropriate array, based on the `iGender` property of the custom object.
This will result in vals only containing the properties specific to the custom
soldier's gender.

Many of the same props (as in actual props, not short for properties!) have
Female and Male values. For example, there may be `SportSunglasses_M` and
`SportSunglasses_F`. The same prop but for different gender models.

### Race
Race is a little more tricky. Unlike gender, we do not know the soldier's race
at the time the property itself is set. This means that we will have to do some
filtering at the retrieval stage. We could use gender's approach, and
have "africanValues", "caucValues", however I feel this is a messy approach, and
would like something a little more elegant.

Regardless, we will need to have a race set before the property bag is returned.
This would then mean that we would have to set properties in the property bag,
as well as the writer. Rather than doing this in two places at once, it may
be best to return a property bag that is pre-set. Rather than saying "here are
all your properties, with their names, types and possible values", the
property-bag class will become more of a "here is your soldier with its values
pre-selected". The class becomes less of a property bag file  and more of a
soldier-creator, retrieving the appropriate properties and setting the correct,
individual values.

That being said, this still does not solve the issue.

Take for example, nmHead (assumed male). We have:

CaucMale_A, CaucMale_B, CaucMale_C, CaucMale_D, CaucMale_E, CaucMale_F
AfrMale_A, AfrMale_B, AfrMale_C, AfrMale_D, AfrMale_E, AfrMale_F
AsnMale_A, AsnMale_B, AsnMale_C, AsnMale_D, AsnMale_E, AsnMale_F
LatMale_A, LatMale_B, LatMale_C, LatMale_D, LatMale_E, LatMale_F

And their matching race:

- Caucasian: 0
- African: 1
- Asian: 2
- Latino: 3

While still not an elegant solution, we roll a random race explicitly. Then we
multiple the value of that roll by 6. We then add a random number between 0 and 5.
This is the index of the head values we will use.

For example:

- Roll 0-3. Result: 2
- 2*6 = 12
- Roll 0-5. Result: 0
- 12+0 = 12
- Index 12 = `AsnMale_A`


- Roll 0-3. Result: 0
- 0*6 = 0
- Roll 0-5. Result: 5
- 0+5 = 5
- Index 5 = `CaucMale_F`

As we start getting these edge cases, the spaghettiness of the code unfortunately
begins to increase. A refactor may be on the cards in the future.

## Notes on specific properties

### Voice
Two properties pertaining to voice appear in the file. These are `iVoice` and `nmVoice`.
I needed to check if there was a link between these two properties, by manually
checking in a hex editor both values per soldier, checking for any relation. I
included `iAttitude`, as this may also link to the type of voice.

| iVoice | nmVoice                 | iAttitude |
|--------|-------------------------|-----------|
| 0      | MaleVoice10_English_US  | 6         |
| 2      | MaleVoice1_English_US   | 0         |
| 2      | MaleVoice1_English_US   | 0         |
| 2      | MaleVoice10_English_US  | 1         |
| 13     | FemaleVoice8_English_US | 3         |
| 2      | MaleVoice4_English_US   | 0         |
| 4      | MaleVoice9_English_US   | 6         |
| 5      | MaleVoice1_English_UK   | 3         |
| 6      | MaleVoice1_English_UK   | 3         |
| 7      | MaleVoice4_English_UK   | 6         |
| 8      | MaleVoice2_English_UK   | 3         |
| 2      | FemaleVoice3_English_US | 1         |
| 1      | MaleVoice5_Germany      | 1         |
| 0      | MaleVoice1_English_US   | 1         |
| 3      | MaleVoice4_English_UK   | 1         |
| 3      | MaleVoice3_Italian      | 4         |
| 4      | MaleVoice10_English_US  | 6         |

No visible pattern seems to be evident from this small sample of data. The
only points of note are that the iVoice value '13' only appears on female
voices.

Update: From a reddit thread, it seems that iVoice is actually a deprecated
property no longer in use.

## Weighting
It would be beneficial to have weighting to specific properties. For example,
with 10 headware props, including None, that would mean 90% of troops would have
headware. By repeating the None line over and over, we increase the chance that
None is chosen, making headware rarer.

This is a cheap and lazy way to add weighting, and will be looked at in the future
to implement it in a nicer, more elegant way.

## Deprecated Propeties
There seem to be a number of deprecated properties inside the bin file. Scouring
internet comments, it seems the developers left them in for backwards
compatability. They seem to be the integer properties that were then replaced with a name property. Examples include:

- `iVoice` replaced with `nmVoice`
- `iFacialHair` replaced with `nmBeard`
- `nmFlag` replaced with `Country`
