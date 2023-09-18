import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const getBasename = path => path.substr(0, path.lastIndexOf('/'));

root.render(
    <BrowserRouter basename={getBasename(window.location.pathname)}>
        <App />
    </BrowserRouter>
);