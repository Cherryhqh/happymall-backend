/*
* @Author: dell
* @Date:   2019-07-10 07:58:53
* @Last Modified by:   dell
* @Last Modified time: 2019-07-16 07:14:19
*/
import MUtil from '../util/mm.js';
import  $ from  'jquery'
const _mm = new MUtil();

class User {
	login(loginInfo) {
		return _mm.request({
			type:'post',
			url:'/manage/user/login.do',
			data:loginInfo
		})
	}
	
	//检查登录接口的数据是不是合法
	checkLoginInfo(loginInfo) {
		let username = $.trim(loginInfo.username);
		let password = $.trim(loginInfo.password)
		
		//判断用户名为空
		if( typeof username !== 'string' || username.length === 0){
			return {
				status:false,
				msg:'用户名不能为空'
			}
		}
		
		//判断密码为空
		if( typeof password !== 'string' || password.length === 0){
			return {
				status:false,
				msg:'密码不能为空'
			}
		}

		return {
			status:true,
			msg:'密码通过'
		}
	}

	logout() {
		return _mm.request({
			type:'post',
			url: '/user/logout.do'
		})
	}

	getUserList(pageNum){
        return _mm.request({
            type    : 'post',
            url     : '/manage/user/list.do',
            data    : {
                pageNum : pageNum
            }
        });
    }
}

export default User;