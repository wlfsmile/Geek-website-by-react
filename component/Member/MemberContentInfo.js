//成员信息
import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Prev from '../../images/prev.png';
import Next from '../../images/next.png';

class MemberContentInfo extends Component{

	constructor(props){
		super(props);
	}

	render(){
		const indexList = this.props.indexList;
		return(
			<div className="memberTab-Info">
				<a className="prev" onClick={this.props.setPrev} >
					<img src={Prev} />
				</a>
				<div className="memberTab-Info-item clearfix">
				{
					indexList.map((count) => {
						return(
						<div className="container">
							<div className="memberTab-Info-flip">
								<div className="flip-front">
									<span></span>
									<p>{count.memberName}</p>
								</div>
								<div className="flip-back" >
									<p>{count.memberIntro}</p>						
								</div>
							</div>
						</div>
						);
					})
				}
				</div>
				<a className="next" onClick={this.props.setNext} >
					<img src={Next} />
				</a>
			</div>
		);
	}
}

export default MemberContentInfo;