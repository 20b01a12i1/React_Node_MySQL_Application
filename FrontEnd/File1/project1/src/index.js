import ReactDOM from 'react-dom/client';
import App2 from './App2';
import {BrowserRouter} from 'react-router-dom';
import './style.css'
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
    <BrowserRouter>
        <App2/>
    </BrowserRouter>
)