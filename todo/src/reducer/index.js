import { ADD_TODO, TOGGLE_TODO } from '../actions';

const updatedTodoList = (chores = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return chores.concat(action.todoItem);

        case TOGGLE_TODO:
            chores[action.todoItem].complete = !chores[action.todoItem].complete;
            return chores;

        default:
        return chores;
    }
}

export default updatedTodoList;