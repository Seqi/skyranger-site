import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TextInput from './Inputs/text/TextInput'
import TwitterInput from './Inputs/twitter/TwitterInput'

import './InputSelection.css'

class InputSelection extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<div id="selection-btns">
						<span id="selection-btns-container">
							<Link to="/text">
								<button type="button" className="btn btn-primary xcom-btn">
									Text
								</button>
							</Link>
							<Link to="/twitter/authenticate">
								<button type="button" className="btn btn-primary xcom-btn">
									Twitter
								</button>
							</Link>
						</span>
					</div>
					<div className="input-container">
						<Route path="/text" component={TextInput} />
						<Route path="/twitter" component={TwitterInput} />
					</div>
				</div>
			</Router>
		)
	}
}

export default InputSelection
