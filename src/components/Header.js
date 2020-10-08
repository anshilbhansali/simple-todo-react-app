import React from "react"

class Header extends React.Component {
	render(){
		return(
			<div>
				<h1 style={{ fontSize: "25px", marginBottom: "15px" }}>A Simple To-do App</h1>
				<p style={{ fontSize: "19px" }}>made with React</p>
			</div>
			)
	}
}
export default Header
