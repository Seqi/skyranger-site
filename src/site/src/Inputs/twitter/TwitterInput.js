import React from 'react'
import { Route } from 'react-router-dom'

import LoadFollowersComponent from './auth/LoadFollowersComponent'
import Authenticate from './auth/Authenticate'
import { ValidateId } from './auth/VerifyAuth'

class TwitterInput extends React.Component {
	constructor() {
		super()

		this.state = {
			loading: true,
			authenticated: false
		}

		this.load().then(() => this.setLoading(false))
	}

	load() {
		if (sessionStorage.getItem('id')) {
			return ValidateId()
				.then(() => this.setAuth(true))
				.catch(() => sessionStorage.removeItem('id'))
		} else {
			return Promise.resolve()
		}
	}

	setAuth(isAuthed) {
		this.setState({ authenticated: isAuthed })
	}

	setLoading(loading) {
		this.setState({ loading: loading })
	}

	getComponent() {
		if (this.state.loading) {
			return <p className="med-txt">Loading..</p>
		}

		if (this.state.authenticated) {
			return <LoadFollowersComponent authenticated="true" />
		}

		return (
			<div>
				<Route path={`${this.props.match.url}/authenticate`} component={Authenticate} />
				<Route path={`${this.props.match.url}/authenticated`} component={LoadFollowersComponent} />
			</div>
		)
	}

	render() {
		return this.getComponent()
	}
}

export default TwitterInput
