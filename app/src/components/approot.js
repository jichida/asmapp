import React from 'react';
import { connect } from 'react-redux';
import { Route,Switch } from 'react-router-dom';
import Index from './index';

import {requireAuthentication} from './requireauthentication';
//圈子相关
import Communityinfo from './community/info.js';
import Communityreplypage from './community/replypage.js';
import MyTopiclist from './community/mytopiclist.js';
import NewTopic from './community/newtopic.js';

//登录相关
import Register from './login/register.js';
import Login from './login/login.js';
import ForgetPwd from './login/forgetpwd.js';

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
                  <Route path="/newtopic" component={requireAuthentication(NewTopic)}/>
                  <Route path="/communityinfo/:topicid" component={Communityinfo}/>
                  <Route path="/communityreplypage/:topicid" component={Communityreplypage}/>
                  <Route path="/mytopiclist" component={requireAuthentication(MyTopiclist)}/>

                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/forgetpwd" component={ForgetPwd}/>
                </Switch>
              </div>
      );
  }
}
export default connect()(AppRoot);
