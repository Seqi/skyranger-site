import React from 'react'

class Instructions extends React.Component {
	render() {
		return (
			<div className="content-container">
				<h1 className="xcom-txt xlrg-txt">Instructions</h1>
				<p className="med-txt">To import your characters in-game:</p>
				<ul>
					<li className="med-txt">
						Place the downloaded file into your XCOM Character Pool directory (usually
						%userprofile%\Documents\My Games\XCOM2\XComGame\CharacterPool)
					</li>
					<li className="med-txt">Navigate to the 'Character Pool' menu in XCOM 2</li>
					<li className="med-txt">Click 'Import Character'</li>
					<li className="med-txt">Select 'Custom'</li>
					<li className="med-txt">Click 'IMPORT ENTIRE POOL'</li>
					<li className="med-txt">
						Consider ensuring that "Use Character Pool Only" is selected if you wish only your custom
						soldiers to be selected in-game
					</li>
				</ul>
			</div>
		)
	}
}

export default Instructions
