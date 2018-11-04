let OAuth = require('oauth')
let config = require('../config')

const requestTokenUrl = 'https://api.twitter.com/oauth/request_token'
const accessTokenUrl = 'https://api.twitter.com/oauth/access_token'

let oauth = new OAuth.OAuth(requestTokenUrl, accessTokenUrl, config.key, config.secret, '1.0A', null, 'HMAC-SHA1')

module.exports = oauth
