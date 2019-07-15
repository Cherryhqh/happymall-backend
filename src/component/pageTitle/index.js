/*
* @Author: dell
* @Date:   2019-07-08 06:56:58
* @Last Modified by:   dell
* @Last Modified time: 2019-07-13 08:42:11
*/
import React from 'react';

class PageTitle extends React.Component{

	// constructor(props){
	// 	super(props);
	// };

	componentWillMount(){
		document.title = this.props.title + "- HAPPY MMALL";
	}
	render(){
		return(
			<div className="row">
				<div className="col-md-12">
					<h1 className= "page-header">{this.props.title}</h1>
					{this.props.children}
				</div>
			</div>
		)
	}
}
export default PageTitle