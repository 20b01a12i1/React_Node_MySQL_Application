import React, { useState, useEffect } from "react";
import Axios from "axios";
var Confirm = require('react-confirm-bootstrap');

const Display = () => {
  const [datalist, setDataList] = useState([]);
  
  const delHandle = (index) => {
      Axios.post(`http://localhost:3001/Delete/${index}`);
    
  };


  useEffect(() => {
    Axios.get("http://localhost:3001/Report").then((response) => {
      setDataList(response.data);
      // console.log(response.data)

    });
  }, [datalist]);

  return (
    <div>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>RegNo</th>
            <th>Name</th>
            <th>Images</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {datalist.map((val) => {
            return (
              <tr>
                <td>{val.sid}</td>
                <td>{val.sname}</td>
                <td><img src={val.studentcol}/></td>
                
                <td>
                  &nbsp;
                  <i
                    className="ui red trash icon"
                    onClick={() => {delHandle(val.sid)}}>
                    </i>
                  &nbsp; &nbsp;
                  <i className="ui green edit outline icon"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Display;
