import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {Provider} from 'react-redux'
const root = createRoot(document.getElementById('root'));

root.render(
 <Provider store={store}>
    <App />
    </Provider>
);

export const isLoggedIn = () => {
    let data = localStorage.getItem("trainer");
    if (data !=null) return true;
    else return false;
};

export const isAdminLoggedIn = () => {
    let data = localStorage.getItem("admin");
    if (data !=null) return true;
    else return false;
};

export const isUserLoggedIn = () => {
    let data = localStorage.getItem("user");
    if (data !=null) return true;
    else return false;
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
