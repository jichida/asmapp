import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch } from 'react-router-dom';
import Index from './index';

import {requireAuthentication} from './requireauthentication';

import Main from './main/main.js';//首页
import Good from './main/good.js';//商品详情页面
import OrderList from './main/orderlist.js';//订单列表
import Search from './main/search.js';//搜索页面
import Messages from './main/message.js';//消息页面
import MessageInfo from './main/messageinfo.js'//消息详情
import Aftersale from './main/aftersale.js'//售后
import Returngoods from './main/returngoods.js'//退货处理

//咨询详情
import TranslateInfo from './translate/info.js';//咨询详情页面
import TranslateReplyList from './translate/replylist.js';//咨询回复列表
import TranslateAdd from './translate/addtranslate.js';//新增咨询页面
import TranslateSelOrder from './translate/selorder.js';//咨询选择订单

//圈子相关
import Communityinfo from './community/info.js';
import Communityreplypage from './community/replypage.js';
import MyTopiclist from './community/mytopiclist.js';
import NewTopic from './community/newtopic.js';

//登录相关
import Register from './login/register.js';
import Login from './login/login.js';
import ForgetPwd from './login/forgetpwd.js';

import Test from './test';//专门用来测试的网页
class AppRoot extends React.Component {
    componentWillMount() {

    }

    componentWillUnmount() {

    }
    render() {
      return (
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Index} />
                  <Route exact path="/test" component={Test} />
                  <Route path="/newtopic" component={requireAuthentication(NewTopic)}/>
                  <Route path="/communityinfo/:topicid" component={Communityinfo}/>
                  <Route path="/communityreplypage/:topicid" component={Communityreplypage}/>
                  <Route path="/mytopiclist" component={requireAuthentication(MyTopiclist)}/>

                  <Route path="/main" component={Main}/>
                  <Route path="/good/:goodid" component={Good}/>
                  <Route path="/order/list" component={OrderList}/>
                  <Route path="/search" component={Search}/>
                  <Route path="/messages" component={Messages}/>
                  <Route path="/message/:messageid" component={MessageInfo}/>

                  <Route path="/order/aftersale" component={Aftersale}/>
                  <Route path="/order/returngoods" component={Returngoods}/>




                  <Route path="/translate/info/:translateid" component={TranslateInfo}/>
                  <Route path="/translate/reply" component={TranslateReplyList}/>
                  <Route path="/translate/add" component={TranslateAdd}/>
                  <Route path="/translate/selorder" component={TranslateSelOrder}/>


                  <Route path="/index" component={Index}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/forgetpwd" component={ForgetPwd}/>
                </Switch>
              </div>
      );
  }
}
export default connect()(AppRoot);
