import {ADD_JOB_ERROR, ADD_JOB_LOADING, ADD_JOB_SUCCESS, GET_JOB_ERROR, GET_JOB_LOADING, GET_JOB_SUCCESS} from "./ActionType"

export const addJobLoading = ()=>{
    return {
        type:ADD_JOB_LOADING,
    }
}
export const addJobSuccess = (d)=>{
    return {
        type:ADD_JOB_SUCCESS,
        payload:d
    }
}
export const addJobError = (err)=>{
    return {
        type:ADD_JOB_ERROR,
        payload:err
    }
}


export const getJobLoading = ()=>{
    return {
        type:GET_JOB_LOADING,
    }
}
export const getJobSuccess = (d)=>{
    return {
        type:GET_JOB_SUCCESS,
        payload:d
    }
}
export const getJobError = (err)=>{
    return {
        type:GET_JOB_ERROR,
        payload:err
    }
};

// export const getData = ()=>(dispatch)=>{
//     dispatch(getJobLoading())
//           fetch("http://localhost:3001/jobs")
//           .then(d=>d.json())
//           .then(res=>dispatch(getJobSuccess(res)))
//           .catch(err=>{
//               dispatch(getJobError(err));
//           });
//   }