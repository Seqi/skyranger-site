export default function SoldierParser(profile) {
	return Object.assign(getName(profile), {
		backgroundText: profile.description,
		nickName: `'@${profile.screen_name}'`,
		gender: Math.ceil(Math.random() * 2)
	})
}

function getName(profile) {
	let result = { firstName: '', lastName: '' }

	// If we don't have a screen name for some reason, use their handle as the first name
	let nameSegments = profile.name.trim().split(' ')
	if (nameSegments.length === 0 || nameSegments[0].trim().length === 0) {
		result.firstName = nameSegments[0]
		return result
	}

	// Get the length of each segment
	let nameSegmentsLength = nameSegments.map(segment => segment.length)
	let midpoint = Math.ceil(profile.name.length / 2)

	// Split down the middle (ish), minimum of 1
	let centerIndex = cumulativeSum(nameSegmentsLength).findIndex(a => a >= midpoint) || 1

	result.firstName = nameSegments.slice(0, centerIndex).join(' ')
	result.lastName = nameSegments.slice(centerIndex, nameSegments.length).join(' ')

	return result

	function cumulativeSum(arr) {
		let result = [arr[0]]
		for (let i = 1; i < arr.length; i++) {
			result.push(result[i - 1] + arr[i])
		}

		return result
	}
}
