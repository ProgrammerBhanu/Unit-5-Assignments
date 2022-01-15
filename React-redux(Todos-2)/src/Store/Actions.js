import {ADD_TODO,
   DEL_TODO, EDIT_TODO, 
   TOGGLE_TODO,
   ADD_TODO_ERROR,
   ADD_TODO_LOADING,
   ADD_TODO_SUCCESS,
   GET_TODO_ERROR,
   GET_TODO_SUCCESS,
   GET_TODO_LOADING,
   DEL_TODO_ERROR,
   DEL_TODO_LOADING,
   DEL_TODO_SUCCESS,
   TOGGLE_TODO_LOADING,
   TOGGLE_TODO_ERROR,
   TOGGLE_TODO_SUCCESS,
   EDIT_TODO_ERROR,
   EDIT_TODO_LOADING,
   EDIT_TODO_SUCCESS
  } from "./ActionsType"

export const addTodo = (data)=>{
    return {
        type:ADD_TODO,
        payload:data
    }
}


export const addTodoLoading = ()=>{
  return {
      type:ADD_TODO_LOADING,
  };
};

export const addTodoError = (err)=>{
  return {
      type:ADD_TODO_ERROR,
      payload:err
  };
};

export const addTodoSuccess = (data)=>{
  return {
      type:ADD_TODO_SUCCESS,
      payload:data
  };
};

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
  export const getTodoSuccess = (data)=>{
    return {
        type:GET_TODO_SUCCESS,
        payload:data
    };
};

export const getData = ()=>(dispatch)=>{
  dispatch(getTodoLoading())
        fetch("http://localhost:3001/todos")
        .then(d=>d.json())
        .then(res=>dispatch(getTodoSuccess(res)))
        .catch(err=>{
            dispatch(getTodoError(err));
        });
}

export const getTodoLoading = ()=>{
    return {
        type:GET_TODO_LOADING,
     
    };
};


export const getTodoError = (err)=>{
    return {
        type:GET_TODO_ERROR,
        payload:err
    };
};

// detele actions

export const deleteTodoSuccess = (data)=>{
  return {
      type:DEL_TODO_SUCCESS,
      payload:data
  };
};

export const deleteTodoLoading = ()=>{
  return {
      type:DEL_TODO_LOADING,
   
  };
};


export const deleteTodoError = (err)=>{
  return {
      type:DEL_TODO_ERROR,
      payload:err
  };
};

// Patch api's actions

export const toggleTodoSuccess = (data)=>{
  return {
      type:TOGGLE_TODO_SUCCESS,
      payload:data
  };
};

export const toggleTodoLoading = ()=>{
  return {
      type:TOGGLE_TODO_LOADING,
   
  };
};


export const toggleTodoError = (err)=>{
  return {
      type:TOGGLE_TODO_ERROR,
      payload:err
  };
};

// EDIT ACTIONS


export const editTodoSuccess = (data)=>{
  return {
      type:EDIT_TODO_SUCCESS,
      payload:data
  };
};

export const editTodoLoading = ()=>{
  return {
      type:EDIT_TODO_LOADING,
   
  };
};


export const editTodoError = (err)=>{
  return {
      type:EDIT_TODO_ERROR,
      payload:err
  };
};