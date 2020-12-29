import React, { useState }  from 'react';	
// import PropTypes from 'prop-types';

const AddTodo = ( { addTask } ) => {
    
    // AddTodo.PropTypes = {
    //     addTask:    propTypes.func.isRequired,
    //     // addTask:    propTypes.array.isRequired,
    // }

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