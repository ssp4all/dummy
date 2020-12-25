import React from 'react';
import TodoItem from  './TodoItem';
// Task

const Todos = ({ todos, markComplete }) => {

    console.log("Todos", todos);

    return (
        <>
            <h2>TOdos goes here!</h2>
            {todos.map((todo, k) => (
                <TodoItem key = { todo.id } item = {todo} markComplete={markComplete}/>
            ))}
        </>
    );
}

export default Todos;

