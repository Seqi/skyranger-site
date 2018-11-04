import React from 'react'

import './FollowerComponent.css'

class FollowerComponent extends React.Component {
	render() {
		let follower = this.props.follower
		return (
			<span className="profile-box">
				<div>
					<img
						className="profile-img"
						src={this.convertTo400x400ProfileImage(follower.profile_image_url)}
						alt=""
					/>
					<div className="name profile-title">{follower.name} </div>
					<div className="handle profile-title">@{follower.screen_name} </div>
				</div>
				<div className="bio">{follower.description} </div>
			</span>
		)
	}

	convertTo400x400ProfileImage(url) {
		return url.replace('_normal', '_400x400')
	}
}

export default FollowerComponent
