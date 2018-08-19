import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Router from './components/Router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();

