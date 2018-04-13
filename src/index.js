import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';

// Import CSS reset and General Styles
import './general';

const APP = document.getElementById('app');
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, APP);
//registerServiceWorker();
