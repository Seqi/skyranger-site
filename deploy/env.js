let fs = require('fs')

console.log('Replacing environment variables')

fs.readFile('app.yaml', { encoding: 'utf8' }, (err, data) => {
	if (err) {
		console.log('Error reading app.yaml', err)
		process.exit(1)
	}

	let populatedData = data
	let cmdArgs = process.argv.slice(2)

	for (let i = 0; i < cmdArgs.length; i += 2) {
		let key = cmdArgs[i]
		let val = cmdArgs[i + 1]

		console.log(`replacing ${key}..`)

		populatedData = populatedData.replace(`__${key}__`, val)
	}

	fs.writeFile('app.yaml', populatedData, err => {
		if (err) {
			console.log('Error writing to app.yaml', err)
			process.exit(1)
		}
	})
})
