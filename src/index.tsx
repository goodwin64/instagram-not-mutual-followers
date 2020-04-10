import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { buildUserscript } from './main';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

buildUserscript();
