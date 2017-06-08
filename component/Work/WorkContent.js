import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

class WorkContent extends Component{

	render(){
		return(
			<div className="workContent">
				<ul className="clearfix">
					<Link to="/work/info" className="workContent-img" ></Link>
					<Link to="/work/info" className="workContent-img" ></Link>
					<Link to="/work/info" className="workContent-img" ></Link>
				</ul>
			</div>
		);
	}
}

export default WorkContent;