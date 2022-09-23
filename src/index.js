import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';

import App from './App';
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App /> 
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
