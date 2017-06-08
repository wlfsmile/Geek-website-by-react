// 报名表单
import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from '../Header.js';

class JoinFromContent extends Component{

	render(){
		return(
			<div className="joinFromContent">
				<from method="post" className="submitFrom">
					<p>
						<span>姓名：</span>
						<input id="name" type="text" name="name" placeholder="Your Name" />
					</p>
					<p>
						<span>学号：</span>
						<input id="number" type="text" name="number" placeholder="Your Number" />
					</p>
					<p>
						<span>专业：</span>
						<input id="major" type="text" name="major" placeholder="Your Major" />
					</p>
					<p>
						<span>方向：</span>
						<input id="direction" type="text" name="direction" placeholder="Your Direction" />
					</p>
					<p>
						<span>联系方式：</span>
						<input id="phone" type="text" name="phone" placeholder="Your PhoneNumber " />
					</p>
					<button className="submitButton" >提交</button>
				</from>
			</div>
		);
	}
}

export default JoinFromContent;