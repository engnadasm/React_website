import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import NavLink from "./components/navLink";
import NavBar from "./components/navbar";
import SearchResult from "./components/SearchResult";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import "./fonts/KronaOne-Regular.ttf";
import BasicExample from "./components/test2";



ReactDOM.render(
    /* <React.StrictMode>
   <SignUp />
 </React.StrictMode>,*/
    <NavBar />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
