

const TodoItem = ({ item, markComplete }) => {

    const getStyle = (isDone) => {
        return {textDecoration : (isDone === true ?  'line-through' : 
            'none')}
    }

    return (
        <>
            <div style={getStyle(item.completed)}>
                <p>
                    <input type="checkbox" onChange={ markComplete }/>{ item.title }
                </p>
            </div>
        </>
    );
}

export default TodoItem;