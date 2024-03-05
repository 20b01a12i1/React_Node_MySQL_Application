import React, { useState } from "react";
import Axios from "axios";
const Uploadimage = () => {

  const [img,setImg] = useState({file: []});
  const handleChange = (e) =>{
    setImg({
      ...img,
      file:e.target.files[0]
    })
  }
  const submitHandle = async ()=>{
    const formdata = new FormData();
    formdata.append("file",img.file);
    Axios.post("http://localhost:3001/uploadimage",formdata,{
      headers:{"Content-Type":"multipart/form-data"},
    }).then((response)=>{
      console.log(response);
    })
  }

  return (
    <div style={{paddingTop:40}}>
      <div class="ui middle aligned center aligned grid container">
        <div class="ui fluid segment">
          <input
            type="file"
            onChange={handleChange}
            class="inputfile"
            id="embedpollfileinput"
          />
        </div>
      </div>
      <button type="submit" onClick={()=>{submitHandle()}}>UPLOAD</button>
    </div>
  );
};

export default Uploadimage;
