import React from 'react';
import Todo from './todo';

const TodoList = (props) => {
    const todos = props.todos.map((todoItem, i) => <Todo todoItem={todoItem} key={i} index={i} />);
    return (
        <ul>
            { todos }
        </ul>
    )
    
}
export default TodoList;