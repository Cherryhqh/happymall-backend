/*
* @Author: dell
* @Date:   2019-07-08 06:56:58
* @Last Modified by:   dell
* @Last Modified time: 2019-07-08 07:16:09
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
				<div className="col-md-12"
				>
				<h1 className=
			    "page-header">
			    	{this.props.title}
			    	{this.props.children}
			    </h1>
				</div>
			</div>
		)
	}
}
export default PageTitle