let tokenStore = []

function get(token) {
	return tokenStore[token]
}

function setRequestToken(token, secret) {
	tokenStore[token] = {
		requestToken: token,
		requestSecret: secret
	}
}

function setAccessToken(token, accessToken, accessSecret) {
	let user = tokenStore[token]

	if (!user) {
		throw Error('could not find user in user store')
	}

	user.accessToken = accessToken
	user.accessSecret = accessSecret
}

module.exports.get = get
module.exports.setRequestToken = setRequestToken
module.exports.setAccessToken = setAccessToken