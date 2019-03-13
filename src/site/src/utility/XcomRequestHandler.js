import base64 from 'base64-js'
import fileDownload from 'js-file-download'

export default function XcomRequestHandler(soldiers) {
	const url = '/generate'

	let request = new Request(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(soldiers)
	})

	return fetch(request)
		.then(result => result.json())
		.then(obj => base64.toByteArray(obj.data))
		.then(binary => fileDownload(binary, 'Custom.bin'))
}
