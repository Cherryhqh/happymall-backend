/*
* @Author: dell
* @Date:   2019-07-12 07:36:36
* @Last Modified by:   dell
* @Last Modified time: 2019-07-13 11:16:17
*/

import React from 'react';
import { Link }  from 'react-router-dom';
import PageTitle from '../../component/pageTitle/index';


export default class ErrorPage extends React.Component{
	
	render() {
		return (
			<div id="page-wrapper">
				<PageTitle title="出错啦">
					<div className="row">
						<div className="col-md-12">
							<span>找不到该路径</span>
							<Link to="/">点我返回首页</Link>
						</div>
					</div>
				</PageTitle>
			</div>
		)
	}
}