/*
* @Author: dell
* @Date:   2019-07-03 21:14:41
* @Last Modified by:   dell
* @Last Modified time: 2019-07-11 07:10:53
*/
import React from 'react';
import { Link }  from 'react-router-dom';
import MUtil from '../../util/mm.js';
import User from '../../service/userService.js'
const _mm = new MUtil();
const _user = new User();

class TopNav extends React.Component{

	constructor(props){
		super(props);
    this.state = {
      username:_mm.getStorage('userInfo').username || ''
    }
	}

  handleClick(){
    return false;
  }

  onLogout() {
    _user.logout().then((res)=>{
      _mm.removeStorage('userInfo');
      window.location.href = '/login';
    },(errMsg) => {
      _mm.errorTips(errMsg);
    })
  }
	
  render(){
    let username = this.state.username ? this.state.username : 'you';
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
        	<Link className="navbar-brand" to="/"><b>HAPPY</b>MMALL</Link>
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <span className="dropdown-toggle" onClick={this.handleClick.bind(this)}>
              <i className="fa fa-user fa-fw"></i>
              <span>welcome {username}</span>
              <i className="fa fa-caret-down"></i>
            </span>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <span>
                  <i className="fa fa-sign-out fa-fw"></i>
                  <span onClick={this.onLogout.bind(this)}>退出登录</span>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
export default TopNav