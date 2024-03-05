import React, { useState} from "react";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const notify = () => toast("Inserted SuccessFully!!!");
  const [id,setId]=useState('');
  const [nameg,setNam]=useState('');
  const change =((e)=>{
    const name=e.target.name;
    const value=e.target.value;
    if(name === "id"){
      setId(value);
    }
    else{
      setNam(value);
    }
  })

  const submitChange=((e)=>{
    e.preventDefault()
    Axios.post('http://localhost:3001/insert',{
      sid:id,
      sname:nameg
    }).then(()=>{
      alert("SuccessFull!!!");
    }).catch((err)=>{
      console.log(err);
    })
  })

  return (
    <div style={{marginTop:90,marginLeft:550}}>
      <div className="ui card">
        <form className="ui form" style={{padding:20}} onSubmit={submitChange}>
          <div className="field">
            <label><h4>Id</h4></label>
            <input type="date" name="id" placeholder="Student Id" onChange={change}/>
          </div>
          <div className="field">
            <label><h4>Name</h4></label>
            <input type="text" name="name" placeholder="Student Name" onChange={change}/>
          </div>
          <button className="ui button" type="submit" onClick={()=>{notify()}}>
            Insert
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;
