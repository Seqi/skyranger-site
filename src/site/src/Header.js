import React from 'react'

import './Header.css'

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<img alt="" src="https://cdn.jsdelivr.net/npm/simple-icons@1.2.7/icons/github.svg" />
				<a target="_blank" rel="noopener noreferrer" href="http://www.github.com/seqi/xcom2charactergen">
					Github
				</a>
			</div>
		)
	}
}

export default Header
