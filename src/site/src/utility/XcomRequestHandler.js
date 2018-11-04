import base64 from 'base64-js'
import fileDownload from 'js-file-download'
import config from '../config'

export default function XcomRequestHandler(soldiers) {
	const url = `${config.apiUrl}/generate`

	let request = new Request(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(soldiers)
	})

	return new Promise((resolve, reject) => {
		fetch(request)
			.then(result => result.json())
			.then(obj => base64.toByteArray(obj.data))
			.then(binary => fileDownload(binary, 'Custom.bin'))
			.then(resolve())
			.catch(err => reject(err))
	})
}
