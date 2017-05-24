import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(

    <BrowserRouter>
    <App />
    </BrowserRouter>
  , document.getElementById('container'));
