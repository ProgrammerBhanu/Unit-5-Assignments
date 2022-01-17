import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components"
import {getData, getJobError, getJobLoading, getJobSuccess} from "../Admin/Actions";

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(3,23%);
    grid-auto-rows: auto;
    gap: 2%;
`;
const Div2 = styled.div`
    border: 2px solid red;
  background-color: aqua;
`;
export const ShowJobs = ()=>{
    const dispatch = useDispatch();
    const {loading,data,error} = useSelector((state)=>({
        loading:state.loading,
        data:state.jobs,
        error:state.error
    }));
useEffect(()=>{
    getTodos();
},[])   
    const getTodos = ()=>{
            dispatch(getJobLoading())
                  fetch("http://localhost:3001/jobs")
                  .then(d=>d.json())
                  .then(res=>dispatch(getJobSuccess(res)))
                  .catch(err=>{
                      dispatch(getJobError(err));
                  });
    }
    console.log(data);
return (
    <div>
        <h1>All Recent Jobs</h1>
        <Div>
        {data.map((e)=>(
                    <Div2 >
                        <h1>Company Name{e.c_name}</h1>
                        <h3>Job Title{e.title}</h3>
                        <h3>Salary {e.salary}</h3>
                        <h3>Description {e.des}</h3>
                        <h3>Location {e.location}</h3>
                        <h3>Type {e.type}</h3>
                    </Div2>
                ))}
                </Div>
    </div>
)
}