import { createAction } from 'redux-act';

export const test_page_getproduct =  createAction('test_page_getproduct');
export const test_getproductinfo = createAction('test_getproductinfo');


export const test_inserttopic_request =  createAction('test_inserttopic_request');
export const test_getmytopic_request =  createAction('test_getmytopic_request');
export const test_gettopiclist_request =  createAction('test_gettopiclist_request');
export const test_insertcommentstotopic_request =  createAction('test_insertcommentstotopic_request');
export const test_insertcommentstocomments_request =  createAction('test_insertcommentstocomments_request');
export const test_lovetopicadd_request =  createAction('test_lovetopicadd_request');
export const test_lovetopicunadd_request =  createAction('test_lovetopicunadd_request');
export const test_lovecommentsadd_request =  createAction('test_lovecommentsadd_request');
export const test_lovecommentsunadd_request =  createAction('test_lovecommentsunadd_request');
