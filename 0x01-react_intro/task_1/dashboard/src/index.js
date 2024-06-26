import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notifications from "./Notifications";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<div>	
	  <div id='root'>
	    <App />
	  <div>
	  <div id='root-notification'>
	    <Notifications />
	  </div>
	<div/>
  </React.StrictMode>
);

reportWebVitals();
