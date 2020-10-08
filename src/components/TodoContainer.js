import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					title: "Setup development environment",
					completed: true
				},
				{
					id: 2,
					title: "Develop website and add content",
					completed: false
				},
				{
					id: 3,
					title: "Deploy to live server",
					completed: false
				}
			]
		};
	}

	handleChange = (todoID) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === todoID){
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	deleteOnClick = (todoID) => {
		let new_todos = [];

		for (const todo of this.state.todos){
			if (todo.id === todoID){
				if (!todo.completed){
					if (window.confirm("Are you sure you want to delete it? You havent completed it..."))
						continue
				} else {
					continue
				}
			}
			new_todos.push(todo);
		}

		this.setState({
			todos: new_todos
		});
	};

	addTodoItem = (title) => {
		let new_todos = this.state.todos.slice();
		let new_id = new_todos[new_todos.length-1].id + 1
		new_todos.push({
			id: new_id,
			title: title,
			completed: false
		});
		this.setState({
			todos: new_todos
		});
	}

	render(){
		return(
			<div className="container">
				<Header />
				<InputTodo
					addTodoItemProps={this.addTodoItem}
				/>
				<TodosList
					todos={this.state.todos}
					handleChangeProps={this.handleChange} 
					deleteOnClickProps={this.deleteOnClick}
				/>
			</div>
			)
	}
}
export default TodoContainer
