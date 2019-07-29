/*
* @Author: dell
* @Date:   2019-07-18 07:21:48
* @Last Modified by:   dell
* @Last Modified time: 2019-07-30 07:36:48
*/

import React            from 'react';
import { BrowserRouter as Switch, Redirect, Route} from 'react-router-dom'

// 页面
import ProductList from './index/index.js';

class ProductRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/product/index" component={ProductList}/>               
                <Redirect exact from="/product" to="/product/index"/>
            </Switch>            
        )
    }
}
export default ProductRouter;

