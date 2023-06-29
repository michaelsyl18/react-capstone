import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Auth
import { Provider } from 'react-router-dom';
import store from './auth/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
