import React, { Component } from 'react'
import ToDoV1 from '../ToDoV1/ToDo'
import todo from '../todo.json'
import FormCreateTodo from 'components/Forms/FormCreateTodo'
import { nanoid } from 'nanoid'


class ToDoListV1 extends Component {
	state ={
		todoList: todo,
	}

	handleCheckCompleted = (id) => {
		this.setState((prevState)=>({
				todoList: prevState.todoList.map(todo => todo.id ===id
					? {...todo,completed: !todo.completed}
					: todo
					),
		}))
	}

	handleDelete = (id) => {
		this.setState((prevState)=>({
				todoList: prevState.todoList.filter(todo=>todo.id!==id),
		}))
	}

	// createTodo = (dataByForm) => {
	// 	const isAlreadyExist = this.state.todo.find(
	// 		(el) => el.title === dataByForm.title
	// 	)
	// 	if (isAlreadyExist) return alert('Already Exist')

	// 	const newTodo = {
	// 		...dataByForm,
	// 		completed: false,
	// 		id: nanoid(),
	// 	}
	// 	this.setState((prev) => ({
	// 		todo: [newTodo, ...prev.todo],
	// 	}))
	// }
	createTodo = (dataByForm) => {
		const isAlreadyExist = this.state.todoList.find(
			(el) => el.title === dataByForm.title
		)
		if (isAlreadyExist) return alert('Already Exist')

		const newTodo = {
			...dataByForm,
			completed: false,
			id: nanoid(),
		}
		this.setState((prev) => ({
			todoList: [newTodo, ...prev.todoList],
		}))
	}


	render() {
		return (
			<>
				<h1>My To-Do list</h1>
				<FormCreateTodo createTodo={this.createTodo}/>
				<ul className='list-group list-group-flush'>
					{this.state.todoList.map((todo) => (
						<ToDoV1
							key={todo.id}
							todo={todo}
							handleCheckCompleted = {this.handleCheckCompleted}
							handleDelete = {this.handleDelete}
						/>
					))}
				</ul>
			</>
		)
	}
}

export default ToDoListV1

// remove  - return{}
// handleDelete = (id) => {
// 	this.setState((prevState)=>{
// 		return {
// 			todoList: prevState.todoList.filter(todo=>todo.id!==id),
// 		}
// 	})
// }
// =================================================================
// handleDelete = (id) => {
// 	this.setState((prevState)=>({
// 			todoList: prevState.todoList.filter(todo=>todo.id!==id),
// 	}))
// }

// remove  - return{}
// handleCheckCompleted = (id) => {
// 	this.setState((prevState)=>{
// 		return {
// 			todoList: prevState.todoList.map(todo => todo.id ===id
// 				? {...todo,completed: !todo.completed}
// 				: todo
// 				),
// 		}
// 	})
// }
// ================================================================
// remove  - return{}
// handleCheckCompleted = (id) => {
// 	this.setState((prevState)=>({
// 			todoList: prevState.todoList.map(todo => todo.id ===id
// 				? {...todo,completed: !todo.completed}
// 				: todo
// 				),
// 	}))
// }

// - ok - work
// class ToDoListV1 extends Component {
// 	state = {
// 		todoList: todo,
// 	}

// 	handleCheckCompleted = (id) => {
// 		this.setState((prevState) => ({
// 			todoList: prevState.todoList.map((todo) =>
// 				todo.id === id ? { ...todo, completed: !todo.completed } : todo
// 			),
// 		}))
// 	}

// 	handleDelete = (id) => {
// 		this.setState((prev) => ({
// 			todoList: prev.todoList.filter((todo) => todo.id !== id),
// 		}))
// 	}

// 	render() {
// 		return (
// 			<>
// 				<h1>My To-Do list</h1>
// 				<ul className='list-group list-group-flush'>
// 					{this.state.todoList.map((todo) => (
// 						<ToDo
// 							key={todo.id}
// 							todo={todo}
// 							handleCheckCompleted={this.handleCheckCompleted}
// 							handleDelete={this.handleDelete}
// 						/>
// 					))}
// 				</ul>
// 			</>
// 		)
// 	}
// }

// export default ToDoListV1
