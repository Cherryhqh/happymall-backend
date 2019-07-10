/*
* @Author: dell
* @Date:   2019-07-08 19:30:15
* @Last Modified by:   dell
* @Last Modified time: 2019-07-10 10:32:11
*/

import React from 'react';
import User from '../../service/userService.js'
import MUtil from '../../util/mm.js';
import './index.css';
const _user = new User();
const _mm = new MUtil();

export default class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			password:'',
			redirect: _mm.getUrlParam('redirect') || '/'
		}
	};
	componentWillMount() {
		document.title='登录 - MMALL ADMIN';
	}

	onInputChange(e) {
		let inputValue = e.target.value;
		let inputName = e.target.name;
		this.setState({
			[inputName]: inputValue
		})
	};

	onInputKeyUp(e) {
		if(e.keyCode === 13) {
			this.onSubmit(e);
		}
	}
	onSubmit(e) {
		let loginInfo = {
			username: this.state.username,
			password:this.state.password
		}
		let checkResult = _user.checkLoginInfo(loginInfo);
		
		//验证通过
		if(checkResult.status){
			_user.login(loginInfo).then((res)=>{
				_mm.setStorage('userInfo',res);
				this.props.history.push(this.state.redirect);
	 		},(errMsg)=>{
				_mm.errorTips(errMsg);
	 		});
		}else{
			_mm.errorTips(checkResult.msg);
		}
	}


	render(){
		return(
			<div className="col-md-4 col-md-offset-4">
				<div className="panel panel-default login-panel">
				  <div className="panel-heading">欢迎登陆-MMALL管理系统</div>
					  <div className="panel-body">
					    <div>
							  <div className="form-group">							    
							    <input 
							    name="username"
							    type="text" 
							    className="form-control"  
							    placeholder="username"
							    onKeyUp={(e)=>{this.onInputKeyUp(e)}} 
							    onChange={(e)=>{this.onInputChange(e)}}
							    />
							  </div>
							  <div className="form-group">							    
							    <input 
							    name="password"
							    type="password" 
							    className="form-control"
							    placeholder="password"
							    onKeyUp={(e)=>{this.onInputKeyUp(e)}} 
							    onChange={(e)=>{this.onInputChange(e)}}
							    />
							  </div>
							  <button 
							  className="btn btn-primary btn-lg btn-block"
							  onClick={(e)=>{this.onSubmit(e)}}
							  >登录</button>
							</div>
					  </div>
				</div>
			</div>			
		)
	}
}