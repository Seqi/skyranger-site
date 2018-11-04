import React from 'react'

import config from '../../../config'
import '../TwitterInput.css'

class Authenticate extends React.Component {
	authenticate() {
		const url = `${config.apiUrl}/twitter/requestToken`

		let request = new Request(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})

		fetch(request)
			.then(response => {
				if (response.status !== 200) throw Error('Error contacting login server.')
				return response
			})
			.then(response => response.text())
			.then(token => window.location.replace(this.getAuthorizeUrl(token)))
			.catch(err => console.log(err))
	}

	getAuthorizeUrl(token) {
		return `https://api.twitter.com/oauth/authorize?oauth_token=${token}`
	}

	render() {
		return (
			<div id="twitter-input">
				<input
					className="btn btn-primary xcom-btn"
					onClick={() => this.authenticate()}
					type="submit"
					value="Authenticate"
				/>
			</div>
		)
	}
}

export default Authenticate
