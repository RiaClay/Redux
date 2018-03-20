import { ADD_TODO, TOGGLE_TODO } from '../actions';

const updatedTodoList = (chores = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return chores.concat(action.todoItem);

        case TOGGLE_TODO:
            return chores.map(updatedTodoList => {
                if (updatedTodoList.id !== action.id) {
                    return updatedTodoList
                }
                return Object.assign({}, updatedTodoList,)
            })
        default:
        return chores
    }
}

export default updatedTodoList;