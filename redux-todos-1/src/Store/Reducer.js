import {ADD_TODO, DEL_TODO, EDIT_TODO, TOGGLE_TODO} from "./ActionsType";
const init = {todos:[]}
export const reducer = (state= init,{type,payload})=>{
    switch(type){
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos,payload]
            }
        case DEL_TODO:
            let { todos } = state;
            return {
                ...state,
                todos:todos.filter((item) => item.id !== payload)
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((item) => {
                if (item.id === payload) {
                    item.status = !item.status;
                }
                return item;
                })
            };
            case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((item) => {
                if (item.id === payload.id) {
                    return { ...item, title: payload.title };
                }
                return item;
                })
            };
        default:
            return state;
    }
}