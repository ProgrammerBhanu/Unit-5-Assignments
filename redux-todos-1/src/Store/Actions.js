import {ADD_TODO, DEL_TODO, EDIT_TODO, TOGGLE_TODO} from "./ActionsType"

export const addTodo = (data)=>{
    return {
        type:ADD_TODO,
        payload:data
    }
}
export const toggleTodo = (payload) => {
    return {
      type: TOGGLE_TODO,
      payload
    };
  };
  
  export const deleteTodo = (payload) => {
    return {
      type: DEL_TODO,
      payload
    };
  };
  
  export const editTodo = (payload) => {
    return {
      type: EDIT_TODO,
      payload
    };
  };