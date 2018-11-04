import React from 'react'

import { SaveId } from './VerifyAuth'
import { getQueryParam } from '../../../utility/QueryParam'

import FollowersComponent from '../followers/FollowersComponent'

import '../TwitterInput.css'

class LoadFollowersComponent extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			token: getQueryParam('oauth_token', this.props),
			verifier: getQueryParam('oauth_verifier', this.props),
			loading: false,
			verified: false
		}

		if (!this.props.authenticated) {
			SaveId(this.state.token, this.state.verifier)
				.then(() => this.setLoading(false))
				.catch(err => console.log(err))
		}
	}

	setLoading(val) {
		this.setState({
			loading: val
		})
	}

	setFollowers(followers) {
		this.setState({ followers })
	}

	render() {
		if (this.state.loading) {
			return <div className="med-txt xcom-txt">Loading..</div>
		}

		return <FollowersComponent />
	}
}

export default LoadFollowersComponent
