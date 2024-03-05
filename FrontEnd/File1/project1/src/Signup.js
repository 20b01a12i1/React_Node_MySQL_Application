import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toastify npm
const Signup = () => {
  const notify = () => toast("Inserted SuccessFully!!!");
    const initialData={
      sid:"",
      sname:""
    }
    const [inputs,setInputs]=useState(initialData);
    const change =((e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setInputs({...inputs,[name]:value});
    })
    useEffect(()=>{
      getUser();
    },[]);

    async function getUser(){
      try{
        const response = await Axios.get("http://localhost:3001/Report");
        // const response = await Axios.get(`http://localhost:3001/Oneuser/${inputs.sid}`);
        setInputs(response.data[0])
      }catch{

      }
    }

    const submitChange=(e)=>{
      e.preventDefault()
      submitHandle(inputs);
      setInputs(initialData);
    }
    const submitHandle=(inputs)=>{
      Axios.post('http://localhost:3001/Signup',inputs).then(()=>{
        alert("SuccessFull!!!");
    })
    }


    return (
        <div style={{marginTop:70,marginLeft:600}}>
      <div className="ui card">
        <form className="ui form" style={{padding:20}} onSubmit={submitChange}>
          <div className="field">
            <label><h4>Id</h4></label>
            <input type="text" name="sid" value={inputs.sid} placeholder="Student Id" onChange={change} />
          </div>
          <div className="field">
            <label><h4>Name</h4></label>
            <input type="text" name="sname" value={inputs.sname} placeholder="Student Name" onChange={change}/>
          </div>
          <button className="ui red button" type="submit" onClick={()=>{notify()}}>
            Update
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
    );
};

export default Signup;