/*
* @Author: dell
* @Date:   2019-07-13 10:55:07
* @Last Modified by:   dell
* @Last Modified time: 2019-07-16 07:50:49
*/
import React from 'react';
// import { Link }  from 'react-router-dom';
import Pagination from '../../util/pagination/index.js';
import PageTitle from '../../component/pageTitle/index';
import User from '../../service/userService.js'
import MUtil from '../../util/mm.js';
const _user = new User();
const _mm = new MUtil();

export default class UserList extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			list:[],
			pageNum:1,
			firstLoading: true
		}
	}

	componentDidMount() {
		this.loadUserList();
	}

	loadUserList() {
		_user.getUserList(this.state.pageNum).then((res) => {
			this.setState(res,()=>{
				this.setState({
					firstLoading: false
				})
			});
		},(errMsg) => {
			this.setState({
				list:[]
			})
			_mm.errorTips(errMsg);
		})
	}
	//页数发生变化的时候
	onPageNumChange(pageNum) {
		this.setState({
			pageNum:pageNum
		},() =>{
			this.loadUserList();
		})
	}
	render() {
		let listBody = this.state.list.map((user, index)=>{
										return(
											<tr key={index}>
												<td>{user.id}</td>
												<td>{user.username}</td>
												<td>{user.email}</td>
												<td>{user.phone}</td>
												<td>{new Date(user.createTime).toLocaleString()}</td>
											</tr>
										)
									})
	let listError = (
			<tr>
				<td colSpan="5" className="text-center">
				{this.state.firstLoading ? '正在加载':'没有找到相应的结果'}</td>
			</tr>
		)

	let tableBody = this.state.list.length > 0 ? listBody:listError

		return (
			<div id="page-wrapper">
				<PageTitle title="用户列表">
		    </PageTitle>
				<div className="row">
						<div className="col-md-12">
							<table className="table table-striped table-bordered">
								<thead>
									<tr>
										<th>ID</th>
										<th>用户名</th>
										<th>邮箱</th>
										<th>电话</th>
										<th>注册时间</th>
									</tr>
								</thead>
								<tbody>
								{
									tableBody
								}
								</tbody>
							</table>
						</div>
				</div>
				<Pagination 
				current={this.state.pageNum} 
				total={this.state.total} 
				onChange={(pageNum) => {this.onPageNumChange(pageNum)}}/>
			</div>
		)
	}
}