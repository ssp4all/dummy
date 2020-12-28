import React, { useState }  from 'react';	

const AddTodo = ( { addTask } ) => {

    const [taskValue, setTaskValue] = useState("");

    return (
        <div>
            <form>
                <input type="text" name="taskVal" placeholder="Type here" value={ taskValue } onChange={(event) => setTaskValue(event.target.value)} />
                <input type="button" value="Add" onClick={ () => addTask(taskValue, setTaskValue) }/>
            </form>
        </div>

    );
}

export default AddTodo;