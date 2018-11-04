let tokenStore = require('./token-store')
let oauth = require('./oauth')

function getRequestToken() {
	return new Promise((resolve, reject) => {
		oauth.getOAuthRequestToken(function (err, token, secret) {
			if (err) {
				console.log('error retrieving request token', err)
				return reject({ error: 'error retrieving request token'})
			}

			tokenStore.setRequestToken(token, secret)
			resolve(token)
		})
	})
}

function checkUserIsValid(token) {
	let tokens = tokenStore.get(token)

	if (tokens && tokens.accessToken && tokens.accessSecret) {
		return Promise.resolve()
	}
	else {
		return Promise.reject()
	}
}

function saveAccessToken(token, verifier) {
	let tokens = tokenStore.get(token)

	return new Promise((resolve, reject) => {
		if (!tokens) {
			return reject('Could not find a token on the server.')
		}

		// Check if we already have an access token and use that
		if (tokens.accessToken && tokens.accessSecret) {
			return resolve()
		}

		oauth.getOAuthAccessToken(token, tokens, verifier,
			function (err, aToken, aSecret) {
				if (err) {
					return reject({ error: 'Error retrieving access token.'})
				}

				tokenStore.setAccessToken(token, aToken, aSecret)
				resolve()
			}
		)
	})
}

module.exports.getRequestToken = getRequestToken
module.exports.checkUserIsValid = checkUserIsValid
module.exports.saveAccessToken = saveAccessToken