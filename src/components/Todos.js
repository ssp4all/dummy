import React from 'react';
import TodoItem from  './TodoItem';

// Task

const Todos = ({ todos, delTodo, markComplete }) => {

    console.log("Todos", todos);

    return (
        <>
            <h2>TOdos goes here!</h2>
            {todos.map((todo) => (
                <TodoItem key = { todo.id } item = { todo } delTodo= {delTodo} markComplete={ markComplete }/>
            ))}
        </>
    );
}

export default Todos;

