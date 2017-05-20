import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app';
import Header from './components/Header';

import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  </Provider>
  , document.getElementById('container'));
