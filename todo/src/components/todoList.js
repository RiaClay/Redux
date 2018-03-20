import React from 'react';
import Todo from './Todo';

export default (props) => {
    const todos = props.todos.map((todoItem, i) => <Todo todoItem={todoItem} key={i} index={i} />);
    return (
        <ul>
            { todos }
        </ul>
    )
}