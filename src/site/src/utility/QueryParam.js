// React router seems to have removed query retrieval and require hand-rolled?
export function getQueryParam(name, props) {
	if (props.location && props.location.search) {
		let split = props.location.search.replace('?', '').split('&')
		for (let i = 0; i < split.length; i++) {
			let x = split[i].split('=')

			if (x && x.length > 0 && x[0] === name) {
				return x[1]
			}
		}
	}

	return null
}
