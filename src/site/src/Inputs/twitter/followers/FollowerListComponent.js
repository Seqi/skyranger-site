import React from 'react'

import FollowerComponent from './FollowerComponent'

import './FollowerListComponent.css'

class FollowerListComponent extends React.Component {
	renderFollowers() {
		let followers = this.props.followers
		if (!followers || !followers.length) {
			return null
		}

		return followers.map(follower => <FollowerComponent key={follower.id} follower={follower} />)
	}

	render() {
		return (
			<div>
				<div className="followers-container">{this.renderFollowers()}</div>

				<input
					className="btn btn-primary xcom-btn"
					type="submit"
					disabled={!this.props || !this.props.followers || !this.props.followers.length > 0}
					value="Generate Soldiers"
				/>
			</div>
		)
	}
}

export default FollowerListComponent
