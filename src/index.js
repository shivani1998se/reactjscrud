import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 
import {Provider} from 'react-redux'
import UserReducer from './redux/UserReducer';

 
const store = configureStore({
  reducer:{
    // here user is a variable 
    //UserReducer in which data is reside .
    users:UserReducer
  }
})
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
 
// step 1 
 
// Provider