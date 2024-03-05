import React from "react";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <div className="ui menu">
        <Link to="/" className="item">Home</Link>
        <Link to="Delete" className="item">Delete</Link>
        <Link to="insert" className="item">Insert</Link>
        <Link to="Signup" className="item">Update</Link>
        <Link to="Report" className="item">Display</Link>
        <Link to="uploadimage" className="item">Image Upload</Link>
      </div>
    </div>
  );
};

export default App;
