import React from 'react'
import { PulseLoader } from 'halogenium'

import FollowerOptionsComponent from './FollowerOptionsComponent'
import FollowerListComponent from './FollowerListComponent'

import SoldierParser from './SoldierParser'
import XcomRequestHandler from '../../../utility/XcomRequestHandler'
import config from '../../../config'

import './FollowersComponent.css'

class FollowersComponent extends React.Component {
	constructor() {
		super()
		this.state = {
			loading: false,
			followers: [],
			options: {}
		}
	}

	setOptions(optns) {
		this.setState({ options: optns })
	}

	setFollowers(followers) {
		this.setState({ followers: followers })
	}

	setLoading(loading) {
		this.setState({ loading: loading })
	}

	getRequestBody(token) {
		let o = this.state.options
		let opts = {
			token,
			mutualsOnly: o.mutualsOnly,
			maxFollowerCount: o.limitFollowers ? o.maxFollowerCount : 500
		}

		return JSON.stringify(opts)
	}

	getFollowers(e) {
		e.preventDefault()
		this.setLoading(true)

		let token = sessionStorage.getItem('id')

		const url = `${config.apiUrl}/twitter/followers`
		let request = new Request(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: this.getRequestBody(token)
		})

		return fetch(request)
			.then(response => response.json())
			.then(followers => this.setFollowers(followers))
			.catch(err => console.log(err))
			.then(() => this.setLoading(false))
	}

	generateSoldiers(e) {
		e.preventDefault()

		let data = this.state.followers.map(f => SoldierParser(f))
		XcomRequestHandler(data)
	}

	renderFollowerList() {
		return (
			<form onSubmit={e => this.generateSoldiers(e)}>
				<div>
					<hr />
					<FollowerListComponent followers={this.state.followers} />
				</div>
			</form>
		)
	}

	render() {
		return (
			<div>
				<form onSubmit={e => this.getFollowers(e)}>
					<FollowerOptionsComponent updateOptions={optns => this.setOptions(optns)} />
					<input
						className="btn btn-primary xcom-btn"
						type="submit"
						disabled={this.state.options.countInvalid || this.state.loading}
						value={this.state.followers.length === 0 ? 'Recruit' : 'Recruit Again'}
					/>
				</form>
				{this.state.loading && <PulseLoader id="loader" />}
				{!this.state.loading && this.state.followers.length > 0 && this.renderFollowerList()}
			</div>
		)
	}
}

export default FollowersComponent
