import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch } from 'react-router-dom';
import Index from './index';

import {requireAuthentication} from './requireauthentication';

import Main from './main/main.js';
import Good from './main/good.js';

//咨询详情
import TranslateInfo from './translate/info.js';
import TranslateReplyList from './translate/replylist.js';
import TranslateAdd from './translate/addtranslate.js';
import TranslateSelOrder from './translate/selorder.js';

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
                  <Route path="/good" component={Good}/>

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