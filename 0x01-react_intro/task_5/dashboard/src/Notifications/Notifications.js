import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
	const buttonClick = () => {
		console.log('Close button has been clicked');
	}
	return (
		<div className="Notifications">
		<button
		style={{
			position: 'absolute',
			right: '10px',
			top: '10px',
			background: 'none',
			border: 'none',
			cursor: 'pointer'
		}}
		aria-label="Close"
		onClick={buttonClick}
		>
		<img src={closeIcon} alt="close icon" className="close-icon" />
		</button>
		<p>Here is the list of notifications</p>
		<ul>
		<li data-priority="default">New course available</li>
		<li data-priority="urgent">New resume available</li>
		<li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
		</ul>
		</div>
	);
}

export default Notifications;

