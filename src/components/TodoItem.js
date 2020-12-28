

const TodoItem = ({ item, delTodo, markComplete }) => {

    const getStyle = (isDone) => {
        return {textDecoration : (isDone === true ?  'line-through' : 
            'none')}
    }
    
    return (
        <>
            <div style={getStyle(item.completed)}>
                <p>
                    <input type="checkbox" id={item.id} onChange={() => markComplete(item.id) }/> { item.title }
                    {' '}<button onClick={() => delTodo(item.id)}> X</button>
                </p>
            </div>
        </>
    );
}

export default TodoItem;