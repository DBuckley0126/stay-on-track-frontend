import React from 'react';
import ReactDOM from 'react-dom';
import './scss/App.css';
import './scss/Nav.css';
import './scss/Header.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HttpsRedirect from 'react-https-redirect';
import NavBar from "./components/Navbar.js";
import Header from "./components/Header.js";

//Redux Setup
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  
  <Provider store={store}>
    <HttpsRedirect>
      
      <NavBar />
      <Header />
    </HttpsRedirect>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
