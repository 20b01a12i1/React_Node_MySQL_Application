import React from 'react';
import App from './App';
import Login from './Login'
import Signup from './Signup';
import {Routes,Route} from 'react-router-dom';
import Page1 from './page1';
import Display from './Display';
import Delete from './Delete';
import Uploadimage from './Uploadimage';
// import Updateimage from './Updateimage';

const App2 = () => {
    return (
        <div>
            <App/>
            <Routes>
                <Route path="/" element={<Page1/>} />
                <Route path="insert" element={<Login/>}/>
                <Route path="Signup" element={<Signup/>} />
                {/* <Route path="Signup" element={<Updateimage/>} /> */}
                <Route path="Delete" element={<Delete/>} />
                <Route path="Report" element={<Display/>} />
                <Route path="uploadimage" element={<Uploadimage/>} />
                
            </Routes>
        </div>
    );
};

export default App2;