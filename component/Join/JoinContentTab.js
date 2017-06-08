// 加入我们的职位Tab键
import React,{Component} from 'react';
import {render} from 'react-dom';

class JoinContentTab extends Component{

	render(){
		return(
			<div className="joinContent-tab">
				<ul>
					<li>技术研发</li>
					<li>产品设计</li>
					<li>运营</li>
				</ul>
			</div>
		);
	}
}

export default JoinContentTab;