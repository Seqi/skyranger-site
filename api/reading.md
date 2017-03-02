# Reading the XCOM2 Character Pool bin

The XCOM 2 character creator uses a .bin file to represent individual soldiers.
Unlike the original XCOM, where you can just dump in names, XCOM 2 requires a
full specification of a soldier's customisation to import them into the game.

This file aims to document the patterns identifiable from the .bin files, and
how to change/create these files to allow us to modify our soldiers.

## File Header:

All files begin with 4 bytes of value [FF FF FF FF].

## Length Prefixed Strings:

All strings are length-prefixed using a 32 bit unsigned integer using little
endian, and this length includes the null terminator. For example, the following
sequence:

`[07 00 00 00] [61 61 61 61 61 61] [00]`

means "the following string is 7 bytes long." We can then assume the next 6
bytes are characters of the string (byte 7 is the null terminator).

## 'None' Separator:

The header is separated from the soldier list by the "None" value. This value
is also used to separate soldiers in the soldier array, as well as denote the
end of a StructProperty. The first occurrence denotes the end of the header, 
and is followed by a 'tab' and the number of soldiers in the array. Each 'None' 
afterwards is followed only by a tab.

## Format:

Each data type follows a specific format, usually revolving around number of
tabs after an item. The general formula is:

[PropertyName] [Tab] [Property Type] [Tab] [Type-Based Handler]

This applies to each property type as such:

### ArrayProperty
>[Random Integer] [Tab] [Integer (Array Length)]

### StrProperty
>[Random Integer] [Tab] [Prefixed String (Value)]

### IntProperty
>[Random Integer] [Tab] [Integer (Value)]

### BoolProperty
>[Random Integer] [Tab] [Byte (01 or 00)]

### NameProperty
>[Random Integer] [Tab] [Prefixed String (Name Property)] [Tab]

### StructProperty
>[Struct Length] [Tab] [Prefixed String (Struct Name)] [Random Integer (usually 0)]

## 'Random Integer'
Before each value in the 'Name/Type/Value', a random 32 bit unsigned integer appears.
This value relates to the number of bytes the property takes up. For example,
an IntProperty, a 32 bit unsigned integer always, takes 4 bytes. A length prefixed
string takes up the string length (1 byte per character), plus 1 for the null
terminator, plus 4 for the length prefix (a 32 bit unsigned integer). NameProperty has the
value 9 as it is the same as string, but is followed by a 4 byte zero pad.

### ArrayProperty
>4

### StrProperty
>[String Length] + 5

### IntProperty
>4

### BoolProperty
>0

### NameProperty
>[String Length] + 9
