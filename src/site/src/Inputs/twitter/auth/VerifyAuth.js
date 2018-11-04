import config from '../../../config'

export function ValidateId() {
	let token = sessionStorage.getItem('id')

	if (!token) return Promise.reject()

	let request = buildRequest(`${config.apiUrl}/twitter/userExists`, { token })

	return fetch(request).then(res => {
		if (res.status !== 204) {
			throw Error('Error checking if you exist')
		}
	})
}

export function SaveId(token, verifier) {
	if (!token && !verifier) return Promise.reject()

	let request = buildRequest(`${config.apiUrl}/twitter/verify`, {
		token,
		verifier
	})

	return fetch(request)
		.then(res => {
			if (res.status !== 204) {
				throw Error('Could not verify')
			}
		})
		.then(() => {
			sessionStorage.setItem('id', token)
		})
}

function buildRequest(url, data) {
	return new Request(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
}
