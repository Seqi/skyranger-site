let oauth = require('./oauth')
let tokenStore = require('./token-store')

function getAllFollowers(requestToken) {
	let tokens = tokenStore.get(requestToken)
	if (!tokens) {
		return Promise.reject({ error: 'Token does not exist on server. Try reauthenticating.' })
	}

	return getFollowersIds(tokens.accessToken, tokens.accessSecret)
		.then(groupFollowerIds)
		.then(idGroups => idGroups.map(ids => resolveFollowerIds(ids, tokens.accessToken, tokens.accessSecret)))
		.then(promises => Promise.all(promises))
		.then(results => [].concat.apply([], results))
		.catch(err => console.log('error', err))

	function getFollowersIds(token, secret) {
		return new Promise((resolve, reject) => {
			let url = 'https://api.twitter.com/1.1/followers/ids.json?count=5000'
			oauth.get(url, token, secret, function(err, data) {
				if (err) {
					return reject({ error: 'Error retrieving followers from Twitter.' })
				}

				resolve(JSON.parse(data).ids.map(id => fixBrokenIds(id)))
			})
		})

		// Some IDs come back as 18-digit IDs. These don't resolve, but the first 8 digits too
		function fixBrokenIds(id) {
			let idStr = '' + id
			return idStr.length === 18 ? idStr.slice(0, 8) : idStr
		}
	}

	function groupFollowerIds(ids) {
		let result = []
		for (let i = 0; i < ids.length; i += 100) {
			result.push(ids.slice(i, i + 100))
		}

		return Promise.resolve(result)
	}

	function resolveFollowerIds(ids, token, secret) {
		return new Promise((resolve, reject) => {
			let url = `https://api.twitter.com/1.1/users/lookup.json?user_id=${ids.join('%2C')}&include_entities=false`

			oauth.get(url, token, secret, function(err, data) {
				if (err) {
					return reject({ error: 'Error resolving followers from Twitter.' })
				}

				resolve(JSON.parse(data))
			})
		})
	}
}

function getRandomFollowers(options) {
	if (!options || !options.token) return Promise.reject('A token is required.')

	return getAllFollowers(options.token)
		.then(followers => applyOptions(followers, options))
		.then(filterFollowerData)
		.then(followers => {
			let requestedFollowerCount = options.maxFollowerCount || 500
			let followerCount = followers.length
			let randomFollowers = []

			for (let i = 0; i < requestedFollowerCount && followers.length > 0; i++) {
				let rand = Math.floor(Math.random() * followerCount--)
				randomFollowers.push(followers.splice(rand, 1)[0])
			}

			return randomFollowers
		})
}

function applyOptions(followers, options) {
	if (options.mutualsOnly) {
		followers = followers.filter(f => f.following)
	}

	return followers
}

function filterFollowerData(followersObj) {
	return followersObj.map(user => {
		return {
			id: user.id,
			name: user.name,
			screen_name: user.screen_name,
			description: user.description,
			profile_image_url: user.profile_image_url
		}
	})
}

module.exports.getAllFollowers = getAllFollowers
module.exports.getRandomFollowers = getRandomFollowers
