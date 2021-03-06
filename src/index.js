import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { BrowserRouter } from 'react-router-dom';

const cookies = new Cookies();


// Add a request interceptor
axios.interceptors.request.use((request) => {
  // Do something before request is sent
  if(!(request.url.includes('api/auth/login') || request.url.includes('api/auth/register') || request.url.includes('api/auth/forgotpassword') || request.url.includes('api/auth/forgotpassword/confirmotp'))){
    request.headers.Authorization = 'Bearer ' + cookies.get('JWTToken');
  }
  return request;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
