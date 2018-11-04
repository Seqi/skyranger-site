let express = require('express')
let router = express.Router()

let twitter = require('../twitter/module')

router.get('/requestToken', (req, res) => {
	twitter.Auth.getRequestToken()
		.then(token => res.end(token))
		.catch(err => res.status(500).json(err))
})

router.post('/userExists', (req, res) => {
	if (!req.body.token) {
		return res.status(400).json({ error: 'Token is required.' })
	}

	twitter.Auth.checkUserIsValid(req.body.token)
		.then(() => res.status(204).end())
		.catch(err => res.status(500).json(err))
})

router.post('/verify', (req, res) => {
	if (!req.body.token || !req.body.verifier) {
		return res.status(400).json({ error: 'Token and verifier are required.' })
	}

	twitter.Auth.saveAccessToken(req.body.token, req.body.verifier)
		.then(() => res.status(204).end())
		.catch(err => res.status(500).json(err))
})

router.post('/followers', (req, res) => {
	if (!req.body.token) {
		return res.status(400).json({ error: 'Token is required.' })
	}

	if (req.body.maxFollowerCount && (req.body.maxFollowerCount <= 0 || req.body.maxFollowerCount > 500)) {
		return res.status(400).json({ error: 'Max follower count should be between 1 and 500' })
	}

	console.log(`Generating twitter followers for ${req.ip}`)

	twitter.Followers.getRandomFollowers(req.body)
		.then(response => res.status(200).json(response))
		.catch(err => res.status(500).json(err))
})

module.exports = router
