import React from "react"

class InputTodo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: ""
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.state.title){
			alert('You must type something');
			return
		}
		this.props.addTodoItemProps(this.state.title);
		this.setState({
			title: ''
		});
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit} className="form-container">
					<input
						type='text'
						placeholder="Learn React..."
						className="input-text"
						value={this.state.title}
						name="title"
						onChange={this.onChange}
					/>
					<input
						type='submit'
						value="Add"
						className="input-submit"
					/>
				</form>
			</div>
			)
	}
}
export default InputTodo
