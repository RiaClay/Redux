import { ADD_TODO, TOGGLE_TODO } from '../actions';

const updatedTodoList = (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return todos.concat(action.todoItem);

        case TOGGLE_TODO:
            todos[action.todoItem].complete = !todos[action.todoItem].complete;
            return todos;

        default:
        return todos;
    }
}

export default updatedTodoList;