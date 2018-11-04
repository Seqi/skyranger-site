let skyranger = require('skyranger')
let express = require('express')
let router = express.Router()

router.post('/generate', (req, res) => {
	console.log('generating')
	const soldierConfig = req.body

	try {
		let soldiers = skyranger(soldierConfig)

		console.log(`Generating ${req.body.length} soldiers for ${req.ip}`)
		res.json({ data: soldiers.toString('base64') })
	} catch (e) {
		return res.status(400).json({ error: e })
	}
})

module.exports = router
