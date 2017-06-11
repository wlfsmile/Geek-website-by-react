import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import Header from '../Header.js';
import JoinContentTab from './JoinContentTab.js';
import JoinContentIntro from './JoinContentIntro.js';
import '../../css/Join.css';

class Join extends Component{
	render(){
		return(
			<div className="join">
				<Header />
				<div className="joinContent">
					<JoinContentTab />
					<JoinContentIntro />
				</div>
				<div>
					<Link to="/join/from" className="joinButton">立即报名</Link>
				</div>
			</div>
		);
	}
}

export default Join;