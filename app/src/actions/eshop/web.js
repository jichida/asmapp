import { createAction } from 'redux-act';

export const getcategory_request =  createAction('getcategory_request');
export const getcategory_result =  createAction('getcategory_result');

//用分页的page_getproduct_request代替
// export const getproduct_request =  createAction('getproduct_request');
// export const getproduct_result =  createAction('getproduct_result');
//获取单个商品详情
export const getproductinfo_request =  createAction('getproductinfo_request');
export const getproductinfo_result =  createAction('getproductinfo_result');
