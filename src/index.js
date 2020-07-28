import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from "./components/Home";
import NavBar from "./components/navbar";
import SearchResult from "./components/SearchResult";
import "./fonts/KronaOne-Regular.ttf";

ReactDOM.render(
    /* <React.StrictMode>
   <SignUp />
 </React.StrictMode>,*/
    <React.Fragment>
    <NavBar />
    <React.StrictMode>
    <SearchResult/>
    <Footer/>
    </React.StrictMode>
    </React.Fragment>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
