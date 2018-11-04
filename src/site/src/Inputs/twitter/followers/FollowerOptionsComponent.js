import React from 'react'

import './FollowerOptionsComponent.css'

class FollowerOptionsComponent extends React.Component {
	constructor(props) {
		super()
		if (!props.updateOptions) {
			throw Error('An update options function is required to be passed into FollowerOptionsComponent')
		}

		this.state = {
			mutualsOnly: false,
			limitFollowers: false,
			maxFollowerCount: null,
			countInvalid: false
		}
	}

	updateOptions(e) {
		let obj = {}
		obj[e.target.id] = e.target.type === 'number' ? Number(e.target.value) : e.target.checked

		if (obj.maxFollowerCount) {
			obj.countInvalid = obj.maxFollowerCount <= 0 || obj.maxFollowerCount > 500
		}

		this.setState(obj, () => {
			this.props.updateOptions(this.state)
		})
	}

	getFollowerCountInputStyle() {
		let inputClassName = ''
		if (this.state.countInvalid) {
			inputClassName += 'follower-count-error '
		}
		if (!this.state.limitFollowers) {
			inputClassName += 'follower-count-collapsed '
		}

		return inputClassName
	}

	render() {
		return (
			<div className="options">
				<h1 className="xcom-txt">Configure your recruits</h1>
				<hr />
				<div id="check-optns">
					<div>
						<label className="check-optn">
							<input id="mutualsOnly" type="checkbox" onChange={e => this.updateOptions(e)} />
							Mutuals Only
						</label>
					</div>

					<div>
						<label className="check-optn">
							<input id="limitFollowers" type="checkbox" onChange={e => this.updateOptions(e)} />
							Limit Follower Count (Default/Max: 500)
						</label>

						<input
							id="maxFollowerCount"
							className={this.getFollowerCountInputStyle()}
							type="number"
							max="500"
							placeholder="1-500"
							onChange={e => this.updateOptions(e)}
						/>
						{this.state.countInvalid && <label id="error-msg">Value must be between 1 and 500.</label>}
					</div>
				</div>
			</div>
		)
	}
}

export default FollowerOptionsComponent
