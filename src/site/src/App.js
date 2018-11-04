import React from 'react'
import Instructions from './Instructions'
import InputSelection from './InputSelection'
import Header from './Header.js'
import './App.css'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div id="container">
					<div id="main-container" className="content-container">
						<div id="static-inner-container">
							<h1 className="xcom-txt xlrg-txt">Hello, Commander</h1>
							<hr />
							<p className="med-txt">
								Bring your friends into the fray by quickly generating a character pool to use within
								XCOM 2. Draft your Twitter followers, or a predefined list of names instantly, so you
								can spend less time in menus, and more time getting your friends killed.
							</p>
							<hr />
							<p className="lrg-txt">Select your recruitment method:</p>

							<InputSelection />
						</div>
					</div>
					<Instructions />
				</div>
			</div>
		)
	}
}

export default App
