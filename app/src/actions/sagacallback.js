import {
  getTranslateList_request,
  getTranslateList_result,
  wait_getTranslateList_request,
  wait_getTranslateList_result
} from './app/app.js';

import { fork, take, call, put, cancel,race,takeLatest } from 'redux-saga/effects';
import {delay} from 'redux-saga';
import config from '../env/config.js';

let synccall=(payload,waitfn,fn)=>{
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(waitfn({resolve,reject,payload}));
      dispatch(fn({...payload}));
    });
  }
}




//以下导出放在视图中
export function getTranslateList(payload){
  console.log(getTranslateList_request);
  console.log(getTranslateList_result);
  return synccall(payload, getTranslateList_request, getTranslateList_result);
}

//2.
function* createflowsz(fnwatres,action){
    let {payload:{resolve,reject,payload:data}} = action;
    console.log('createflowsz==>payload:' +JSON.stringify(data));
    const { response, timeout } = yield race({
       response: take(fnwatres),
       timeout: call(delay, config.requesttimeout)
    });
    if(timeout){
      reject('请求超时!');
    }
    else{
      let {payload:{err,result}} = response;
      if (err) {
        reject(err);
      }
      else{
        resolve(result);
      }
    }
}
//以下导出放在saga中
export function* createsagacallbackflow(){
  let waitfnsz = [];

  waitfnsz.push([`${wait_getTranslateList_request}`,`${wait_getTranslateList_result}`]);

  for(let i = 0;i < waitfnsz.length; i++){
     let fnsz = waitfnsz[i];
     yield takeLatest(fnsz[0], createflowsz, fnsz[1]);
  }

}
