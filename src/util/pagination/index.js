/*
* @Author: dell
* @Date:   2019-07-16 06:54:20
* @Last Modified by:   dell
* @Last Modified time: 2019-07-16 07:11:13
*/

import React from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

export default class Pagination extends React.Component{
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
				<RcPagination {...this.props} 
					hideOnSinglePage
					showQuickJumper />
				</div>
			</div>
		)

	}
}