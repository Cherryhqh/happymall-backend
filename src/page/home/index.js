/*
* @Author: dell
* @Date:   2019-07-03 06:44:13
* @Last Modified by:   dell
* @Last Modified time: 2019-07-08 22:01:01
*/
import React from 'react';
import PageTitle from '../../component/pageTitle/index';
import './index.css';

export default class Homw extends React.Component{
	render(){
		return(
			<div id="page-wrapper">			
			    <PageTitle title="首页">
			    <button className="btn btn-warning">test</button>
			    </PageTitle>
				<div className="row">
				<div className="col-md-12">
				</div>
				</div>
			</div>
		)
	}
}