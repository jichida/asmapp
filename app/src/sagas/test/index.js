import { put,takeLatest,call} from 'redux-saga/effects';
// import {delay} from 'redux-saga';
import {
  test_page_getproduct,
  test_getproductinfo,

  getproductinfo_request
} from '../../actions';

import {callthen,page_getproduct_request,page_getproduct_result} from '../pagination';
// import { goBack } from 'react-router-redux';//https://github.com/reactjs/react-router-redux
import config from '../../env/config.js';
import store from '../../env/store';
// import  {
//   getrandom
// } from '../test/bmsdata.js';\

const callfn_page_getproduct = (payload)=>{
  return store.dispatch(callthen(page_getproduct_request,page_getproduct_result,payload));
}

export function* testflow() {
  yield takeLatest(`${test_page_getproduct}`, function*(action) {
    const query = {};
    const sort = {};
    const offset = 0;
    const pagenumber = 10;
    const result = yield call(callfn_page_getproduct,{
        query: query,
        options: {
            sort: sort,
            offset: offset,
            limit: pagenumber,
        }
    });
    console.log(result);
  });

  yield takeLatest(`${test_getproductinfo}`, function*(action) {
    yield put(getproductinfo_request({_id:'5bdfd22de334f0839c6817d4'}));

  });
}
