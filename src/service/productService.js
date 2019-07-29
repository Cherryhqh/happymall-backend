/*
* @Author: dell
* @Date:   2019-07-30 07:38:39
* @Last Modified by:   dell
* @Last Modified time: 2019-07-30 07:46:51
*/

import MUtil from '../util/mm.js';

const _mm = new MUtil();

class Product{
	getProductList(pageNum) {
		return _mm.request({
			type:'post',
			url:'/manage/product/list.do',
			data: {
				pageNum:pageNum
			}
		})
	}
}

export default Product;