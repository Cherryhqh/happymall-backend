/*
* @Author: dell
* @Date:   2019-07-08 07:17:24
* @Last Modified by:   dell
* @Last Modified time: 2019-07-10 08:30:44
*/
import  $ from  'jquery'

class MUtill{
	request(param){
    return new Promise((resolve, reject) => {
        $.ajax({
            type        : param.type        || 'get',
            url         : param.url         || '',
            dataType    : param.dataType    || 'json',
            data        : param.data        || null,
            success     : res => {
                // 数据请求成功
                if(0 === res.status){
                    typeof resolve === 'function' && resolve(res.data, res.msg);
                }
                // 没有登录状态，强制登录
                else if(10 === res.status){
                    this.doLogin();
                }
                else{
                    typeof reject === 'function' && reject(res.msg || res.data);
                }
            },
            error       : err => {
                typeof reject === 'function' && reject(err.statusText);
            }
        });
    });  
	}
	//login
	doLogin(){
		window.location.href='/login/redirect=' + encodeURIComponent(window.location.pathname);
	}
	// 获取URL参数
  getUrlParam(name){
    // param=123&param1=456
    let queryString = window.location.search.split('?')[1] || '',
        reg         = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        result      = queryString.match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  }
	
	//错误提示
	errorTips(errMsg) {
		alert(errMsg || 'wrong');
	}

}

export default MUtill;