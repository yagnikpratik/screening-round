import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';

import './style.scss';
ReactDOM.render(
	<div>
		<h1>Welcome to Carta healthacare</h1>
		<h2>This app is running in <span>{ENV}</span> mode</h2>
	</div>,
	document.getElementById('root')
);
