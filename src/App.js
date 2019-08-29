import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {

	state = {
		todos: []
	}

	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((response) => {
			this.setState({todos: response.data})
		});
	}

	markComplete = (id) => {
		this.setState({ todos: this.state.todos.map((el) => {
			if (el.id === id) el.completed = !el.completed;
			return el;
		}) });
	}

	deleteTodo = (id) => {
		this.setState({ todos: this.state.todos.filter((el) => el.id !== id)});
	}

	addTodo = (title) => {
		axios.post("https://jsonplaceholder.typicode.com/todos",{
			title,
			completed: false
		}).then((response) => {
			this.setState({ todos: [
				...this.state.todos,
				response.data
			] });
		})

		let newId = this.state.todos.length + 1;

		
	}

	render() {
	return(
		<Router>
			<div className="App">
				<Header />
				<Route exact path = "/" render = { props => (
					<React.Fragment>
						
						<AddTodo addTodo = {this.addTodo} />
						<Todos todos = {this.state.todos} markComplete = {this.markComplete} deleteTodo={this.deleteTodo} />
					</React.Fragment>
				) } />
				<Route path = "/about" component = {About} />
			</div>
		</Router>
	);
	}
}

export default App;
