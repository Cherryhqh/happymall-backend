/*
* @Author: dell
* @Date:   2019-07-03 21:14:41
* @Last Modified by:   dell
* @Last Modified time: 2019-07-08 21:54:30
*/
import React from 'react';
import { Link }  from 'react-router-dom';

class TopNav extends React.Component{

	// constructor(props){
	// 	super(props);
	// }

  handleClick(){
    return false;
  }
	
  render(){
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
        	<Link className="navbar-brand" to="/"><b>HAPPY</b>MMALL</Link>
        </div>
        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="https://www.baidu.com" onClick={this.handleClick.bind(this)}>
              <i className="fa fa-user fa-fw"></i>
              <span>welcome</span>
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a href="https://www.baidu.com">
                  <i className="fa fa-sign-out fa-fw"></i>
                  <span>退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
export default TopNav