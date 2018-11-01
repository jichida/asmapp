import {
    common_err,

    loginwithtoken_request,
    login_request,
    login_result,

    logout_request,
    logout_result,

    getsystemconfig_request,
    getsystemconfig_result,

    gettopiclist_request,
    gettopiclist_result,

    inserttopic_request,
    inserttopic_result,

    getmytopic_request,
    getmytopic_result,

    insertcommentstotopic_request,
    insertcommentstotopic_result
  } from '../../actions';

//接收的对应关系
let recvmessagetoresultpair = {
  'common_err':common_err,
  
  'login_result':login_result,
  'logout_result':logout_result,
  'getsystemconfig_result':getsystemconfig_result,

  'gettopiclist_result':gettopiclist_result,
  'inserttopic_result':inserttopic_result,
  'getmytopic_result':getmytopic_result,
  'insertcommentstotopic_result':insertcommentstotopic_result,

};

//非验证发送接口
let sendmessagefnsz = {
  'logout':`${logout_request}`,
  'loginwithtoken':`${loginwithtoken_request}`,
  'login':`${login_request}`,

  'getsystemconfig':`${getsystemconfig_request}`,
  'gettopiclist':`${gettopiclist_request}`,//不用

};

//验证发送接口
let sendmessageauthfnsz = {
  'inserttopic':`${inserttopic_request}`,
  'getmytopic':`${getmytopic_request}`,
  'insertcommentstotopic':`${insertcommentstotopic_request}`,

};

export default {recvmessagetoresultpair,sendmessagefnsz,sendmessageauthfnsz};
