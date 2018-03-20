export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = todoItem => {
    return {
        type: ADD_TODO,
        todoItem
    }
}

export const toggleTodo = index => {
    return {
        type: TOGGLE_TODO,
        index
    }
}

