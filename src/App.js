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
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  
);

// export default App;



