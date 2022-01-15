import {ADD_TODO_SUCCESS,ADD_TODO_LOADING,ADD_TODO_ERROR,GET_TODO_LOADING,GET_TODO_SUCCESS,GET_TODO_ERROR, DEL_TODO_LOADING, DEL_TODO_SUCCESS, DEL_TODO_ERROR, TOGGLE_TODO_ERROR, TOGGLE_TODO_SUCCESS, TOGGLE_TODO_LOADING, EDIT_TODO_LOADING, EDIT_TODO_SUCCESS, EDIT_TODO_ERROR} from "./ActionsType";

const init = {loading:false,todos:[],error:false};
export const reducer = (state = init,{type,payload})=>{
    switch(type){
        // case ADD_TODO:
        //     return {
        //         ...state,
        //         todos:[...state.todos,payload]
        //     };
        case ADD_TODO_LOADING:
            return {
                ...state,
                loading:true,
            };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos:[...state.todos,payload],
                loading:false,
            };
        case ADD_TODO_ERROR:
            return {
                ...state,
                loading:false,
                err:true,
            }
            case GET_TODO_LOADING:
                return {
                    ...state,
                    loading:true,
                };
            case GET_TODO_SUCCESS:
                return {
                    ...state,
                    todos:payload,
                    loading:false,
                };
            case GET_TODO_ERROR:
                return {
                    ...state,
                    loading:false,
                    err:true,
                }
            case DEL_TODO_LOADING:
                return {
                    ...state,
                    loading:true,
                }
            case DEL_TODO_SUCCESS:
                return {
                    ...state,
                    loading:false
                }
            case DEL_TODO_ERROR:
                return {
                    loading:false,
                    err:true
                }
            case TOGGLE_TODO_LOADING:
                return {
                    ...state,
                    loading:true,
                }
            case TOGGLE_TODO_SUCCESS:
                return {
                    ...state,
                    todos:[...state.todos,payload],
                    loading:false
                }
            case TOGGLE_TODO_ERROR:
                return {
                    loading:false,
                    err:true
                }
            case EDIT_TODO_LOADING:
                return {
                    ...state,
                    loading:true,
                }
            case EDIT_TODO_SUCCESS:
                return {
                    ...state,
                    todos:[...state.todos,payload],
                    loading:false
                }
            case EDIT_TODO_ERROR:
                return {
                    loading:false,
                    err:true
                }
        default:
            return state;
    }
};