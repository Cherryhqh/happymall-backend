/*
* @Author: dell
* @Date:   2019-07-03 07:20:30
* @Last Modified by:   dell
* @Last Modified time: 2019-07-04 07:18:26
*/
import React from 'react';
import TopNav from '../topNav/index.js';
import SideNav from '../sideNav/index.js';
import './index.css';
class Layout extends React.Component{

	// constructor(props){
	// 	super(props);
	// };

	render(){
		return(
			<div id="wrapper">				
					<TopNav />
					<SideNav />
				
				{this.props.children}
			</div>
		)
	}
}
export default Layout