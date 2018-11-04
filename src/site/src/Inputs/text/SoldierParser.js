const MAX_SOLDIERS = 500
export default function SoldierParser(names) {
	let soldiers = []
	let lines = names.trim().split('\n')

	if (lines.length > MAX_SOLDIERS || lines.length === 0) {
		return null
	}

	for (let i = 0; i < lines.length; i++) {
		let soldier = parseName(lines[i])
		if (soldier) {
			// Give a random gender
			soldier.gender = Math.floor(Math.random() * 2) + 1

			// Give an empty Bio
			soldier.backgroundText = ''

			soldiers.push(soldier)
		}
	}

	return soldiers
}

function parseName(name) {
	let segments = name.trim().split(' ')

	if (segments.length === 0) {
		return null
	}

	return {
		firstName: getFirstName(segments),
		lastName: getLastName(segments),
		nickName: getNickName(segments)
	}
}

function getFirstName(nameSegments) {
	// We know that nameSegments will have at least one item in as it's
	// checked prior.
	// Max length: 11
	return nameSegments[0]
}

function getLastName(nameSegments) {
	// Return blank string if only one name supplied
	// Max length: 15
	if (nameSegments.length < 2) {
		return ''
	}

	return nameSegments[nameSegments.length - 1]
}

function getNickName(nameSegments) {
	// Nickname would require first and last name already existing
	// Max Length: 11
	if (nameSegments.length < 3) {
		return ''
	}

	let nick = nameSegments.slice(1, -1).join(' ')

	// Wrap in single quotes
	return '\'' + nick + '\''
}
