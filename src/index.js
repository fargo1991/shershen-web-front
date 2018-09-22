import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.min.css'
import './index.css';
import './override.css';
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';
import './components/notice/notice.css';

import App from './views/App/AppView.jsx';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './configureStore.js';

let store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
