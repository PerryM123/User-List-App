import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
/*
* Question
* Does each component need to handle it's own css?
* Or should we have just one css file handling the styles if all pages?
* Or is there a specific ReactJS way to approach this?
*
* Reference URL:
* https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
*
*/
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
