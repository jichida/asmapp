/**
 * Created by wangxiaoqing on 2017/3/20.
 */
import { createReducer } from 'redux-act';
import {
    //登录
    getcategory_result,
} from '../../actions/index.js';
import lodahmap from 'lodash.map';

const initial = {
    eshop: {
        categories: {},
    },
};

const eshop = createReducer({
    [getcategory_result]:(state, payload)=>{
        const {list} = payload;
        let categories = {};
        lodahmap(list,(v)=>{
          categories[v._id] = v;
        });
        return {categories};
    },

}, initial.eshop);

export default eshop;
