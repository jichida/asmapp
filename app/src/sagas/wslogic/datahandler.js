import {
    common_err,

    loginwithtoken_request,
    login_request,
    login_result,

    register_request,
    register_result,

    sendauth_request,
    sendauth_result,

    logout_request,
    logout_result,

    getsystemconfig_request,
    getsystemconfig_result,

    getcategory_request,
    getcategory_result,

    gettopiclist_request,
    gettopiclist_result,

    inserttopic_request,
    inserttopic_result,

    getmytopic_request,
    getmytopic_result,

    insertcommentstotopic_request,
    insertcommentstotopic_result,


    getproductinfo_request,
    getproductinfo_result
  } from '../../actions';

import {
  page_getproduct_request,
  page_getproduct_result
} from '../pagination';
//接收的对应关系
let recvmessagetoresultpair = {
  'common_err':common_err,
  'register_result':register_result,
  'sendauth_result':sendauth_result,
  'login_result':login_result,
  'logout_result':logout_result,
  'getcategory_result':getcategory_result,
  'getsystemconfig_result':getsystemconfig_result,

  'gettopiclist_result':gettopiclist_result,
  'inserttopic_result':inserttopic_result,
  'getmytopic_result':getmytopic_result,
  'insertcommentstotopic_result':insertcommentstotopic_result,

  'page_getproduct_result':page_getproduct_result,
  'getproductinfo_result':getproductinfo_result,
};

//非验证发送接口
let sendmessagefnsz = {
  'register':`${register_request}`,
  'logout':`${logout_request}`,
  'loginwithtoken':`${loginwithtoken_request}`,
  'login':`${login_request}`,
  'sendauth':`${sendauth_request}`,
  'getcategory':`${getcategory_request}`,
  'getsystemconfig':`${getsystemconfig_request}`,
  'gettopiclist':`${gettopiclist_request}`,//不用
  'page_getproduct':`${page_getproduct_request}`,
  'getproductinfo':`${getproductinfo_request}`
};

//验证发送接口
let sendmessageauthfnsz = {

  'inserttopic':`${inserttopic_request}`,
  'getmytopic':`${getmytopic_request}`,
  'insertcommentstotopic':`${insertcommentstotopic_request}`,

};

export default {recvmessagetoresultpair,sendmessagefnsz,sendmessageauthfnsz};
