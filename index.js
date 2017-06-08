import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Home from './component/Home/Home.js';
import Work from './component/Work/Work.js';
import WorkInfo from './component/WorkInfo/WorkInfo.js'
import Member from './component/Member/Member.js';
import Join from './component/Join/Join.js';
import JoinFrom from './component/JoinFrom/JoinFrom.js';
import './css/Header.css';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Home} />
		<Route path="/work" component={Work} />
		<Route path="/work/:id" component={WorkInfo} />
		<Route path="/member" component={Member} />
		<Route path="/join" component={Join} />
		<Route path="/join/:id" component={JoinFrom} />
	</Router>
),document.getElementById('root'));