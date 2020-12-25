import React from 'react';	
// import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'

function App (){
	
	const state = {
		todos: [
			{
				id: 1, 
				title: 'Take me out!',
				completed: true
			},
			{
				id: 2, 
				title: 'Take me in!',
				completed: false
			},	
		]
	}
	const markComplete = () => {
        console.log('Hello');
    }
	return  (
		<>
			<div className="App">
				<Todos todos={ state.todos } markComplete={markComplete}/>
			</div>
		</>
	);

}

export default App;
