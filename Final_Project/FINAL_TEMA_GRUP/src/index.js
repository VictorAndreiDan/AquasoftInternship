import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allReducers from './reducers';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import FormComponent from './components/form/FormComponent.jsx';
import NavbarComponent from './components/navbar/NavbarComponent.js';

const store = configureStore(
  {reducer: allReducers},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <NavbarComponent></NavbarComponent>
      {/* <FormComponent></FormComponent> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
