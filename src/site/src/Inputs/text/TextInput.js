import React from 'react'

import SoldierParser from './SoldierParser'
import XcomRequestHandler from '../../utility/XcomRequestHandler'

import './TextInput.css'

class TextInput extends React.Component {
	constructor() {
		super()
		this.state = {
			soldiers: null,
			soldierCount: 0,
			valid: false,
			loading: false
		}
	}

	setLoading(isLoading) {
		this.setState({ loading: isLoading })
	}

	setSoldierCount(count) {
		const soldierLimit = 500

		if (this.state.soldierCount !== count) {
			this.setState({ soldierCount: count })
		}

		if (count > soldierLimit) {
			if (this.state.valid) {
				this.setState({ valid: false })
			}
		} else {
			if (!this.state.valid) {
				this.setState({ valid: true })
			}
		}
	}

	getSoldierCount() {
		return `Generate ${this.state.soldierCount} soldiers`
	}

	updateSoldiers(src) {
		let input = src.target.value
		this.setState({ soldiers: input })

		let soldierCount = input.split('\n').filter(line => line.trim().length > 0).length
		this.setSoldierCount(soldierCount)
	}

	onSubmit(e) {
		e.preventDefault()
		this.setLoading(true)

		let soldiers = SoldierParser(this.state.soldiers)
		XcomRequestHandler(soldiers)
			.catch(err => console.log(err))
			.then(() => this.setLoading(false))
	}

	render() {
		return (
			<div>
				<form onSubmit={src => this.onSubmit(src)}>
					<p>Enter your soldier names, separated by new lines.</p>
					<textarea id="soldier-text-input" onInput={src => this.updateSoldiers(src)} />

					<input
						className="btn btn-primary xcom-btn"
						type="submit"
						disabled={!this.state.valid || this.state.loading}
						value={this.getSoldierCount()}
					/>
				</form>
			</div>
		)
	}
}

export default TextInput
