import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import About from './components/pages/About'
import AddTodo from './components/AddTodo'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import NotFoundPage from './components/pages/NotFoundPage'

function App() {
	const [state, setState] = useState({ todos: [] })
	useEffect(() => {
		const updateState = async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
			const body = await res.json();
			console.log("F", body);

			if (body && body.length !== 0)
				setState({ todos: body });
			else
				setState({ todos: [] });
		}
		updateState();
	}, []);

	const markComplete = (id) => {
		setState({
			todos: state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};
	const delTodo = (id) => {
		setState({
			todos: [...state.todos.filter(todo => todo.id !== id)]
		});
	}
	const addTask = (task, setTaskValue) => {
		const newTask = {
			id: Math.floor(Math.random() * 100),
			title: task,
			completed: false,
		}
		setState({
			todos: [...state.todos, newTask]
		});
		setTaskValue("");
	}
	return (
		<>
			<Router>
				<div className="App">
					<Header />
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => (
								<>
									<AddTodo addTask={addTask} />
									{
										state.todos && state.todos.length !== 0 ?
											<Todos
												todos={state.todos}
												delTodo={delTodo}
												markComplete={markComplete}
											/>
											:
											<p>No tasks!</p>
									}
								</>
							)}
						/>
						<Route path="/about" component={About} exact />
						<Route component={NotFoundPage} />
					</Switch>

				</div>
			</Router>

		</>
	);

}

export default App;
