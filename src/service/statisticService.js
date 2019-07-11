/*
* @Author: dell
* @Date:   2019-07-12 07:25:30
* @Last Modified by:   dell
* @Last Modified time: 2019-07-12 07:29:45
*/

/*
* @Author: dell
* @Date:   2019-07-10 07:58:53
* @Last Modified by:   dell
* @Last Modified time: 2019-07-11 07:06:36
*/
import MUtil from '../util/mm.js';
const _mm = new MUtil();

class Statistic {
	getHomeCount() {
		return _mm.request({
			url:'/manage/statistic/base_count.do',
		})
	}
}

export default Statistic;