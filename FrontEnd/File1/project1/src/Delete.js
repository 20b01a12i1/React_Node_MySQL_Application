import React, { useState } from 'react';
import Axios from 'axios';
const Delete = () => {
    const [idl,setId]=useState("");
    const change=((e)=>{
        const name=e.target.name;
        const value=e.target.value;
        if(name === "id"){
            setId(value);
        }
        // else{
        //     alert("please give valid id!!");
        // }
    })
    const submitHandler=(()=>{
        Axios.post('http://localhost:3001/Delete',{
            sid:idl
        }).then(()=>{
            alert("SuccessFull!!!");
          });
    })
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="id" onChange={change}/>
                <button type='submit'>Delete</button>
            </form>  
        </div>
    );
};

export default Delete;