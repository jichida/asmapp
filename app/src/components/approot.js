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
import CreateOrder from './main/createorder.js'//订单确认
import ShoppingCar from './main/shoppingcar.js'//购物车
import Store from './main/store.js'//商家详情
import StoreAptitude from './main/storeaptitude.js'//商家资质
import OrderInfo from './main/orderinfo.js'//订单详情-待发货-待收货...
import OrderExpress from './main/express.js'//订单快递信息
import SetLocation from './main/setlocation.js'//定位
import OrderEvaluate from './main/orderevaluate.js'//评价订单


//个人中心
import UserCenter from './user/user.js'//我的
import AddressList from './user/addresslist.js'//评价订单
import UserInfo from './user/userinfo.js'//评价订单
import Setting from './user/setting.js'//系统设置
import Wealth from './user/wealth.js'//系统设置
import Wealthdetails from './user/wealthdetails.js'//我的账单明细
import Pointsdetails from './user/pointsdetails.js'//我的账单明细
import Posts from './user/posts.js'//我的发帖
import Shareinstructions from './user/shareinstructions.js'//分享说明
import Postsmycreate from './user/postsmycreate.js'//我的发布
import Postsmycomments from './user/postsmycomments.js'//我的评论
import Postscollection from './user/postscollection.js'//我的收藏
import Postsshielding from './user/postsshielding.js'//我的屏蔽
import Postshistory from './user/postshistory.js'//我的浏览历史
import Postsmyzan from './user/postsmyzan.js'//我的赞过的帖子
import Myshare from './user/myshare.js'//我的分享
import Myreport from './user/myreport.js'//我的举报
import Bereport from './user/bereport.js'//被举报的帖子
import Shareextraction from './user/shareextraction.js'//我的分享提现记录
import Commissionlist from './user/commissionlist.js'//我的佣金记录
import Rules from './user/rules.js'//我的佣金记录
import Rewards from './user/rewards.js'//我的佣金记录
import Points from './user/points.js'//我的积分
import Editaddress from './user/editaddress.js'//编辑地址
import Addaddress from './user/addaddress.js'//新增地址


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
                  <Route path="/newtopic" component={requireAuthentication(NewTopic)} />
                  <Route path="/communityinfo/:topicid" component={Communityinfo}/>
                  <Route path="/communityreplypage/:topicid" component={Communityreplypage}/>
                  <Route path="/mytopiclist" component={requireAuthentication(MyTopiclist)}/>
                  <Route path="/setlocation" component={SetLocation}/>

                  <Route path="/main" component={Main}/>
                  <Route path="/good/:goodid" component={Good}/>
                  <Route path="/order/list" component={OrderList}/>
                  <Route path="/search" component={Search}/>
                  <Route path="/messages" component={Messages}/>
                  <Route path="/message/:messageid" component={MessageInfo}/>

                  <Route path="/order/aftersale" component={Aftersale}/>
                  <Route path="/order/returngoods" component={Returngoods}/>
                  <Route path="/order/createorder" component={CreateOrder}/>
                  <Route path="/order/:orderid" component={OrderInfo}/>
                  <Route path="/orderevaluate" component={OrderEvaluate}/>

                  <Route path="/user/center" component={UserCenter}/>
                  <Route path="/user/addresslist" component={AddressList}/>
                  <Route path="/user/info" component={UserInfo}/>
                  <Route path="/user/setting" component={Setting}/>
                  <Route path="/user/wealth" component={Wealth}/>
                  <Route path="/user/wealthdetails" component={Wealthdetails}/>
                  <Route path="/user/pointsdetails" component={Pointsdetails}/>

                  <Route path="/user/shareinstructions" component={Shareinstructions}/>
                  <Route path="/user/posts" component={Posts}/>
                  <Route path="/user/postsmycreate" component={Postsmycreate}/>
                  <Route path="/user/postsmycomments" component={Postsmycomments}/>
                  <Route path="/user/postscollection" component={Postscollection}/>
                  <Route path="/user/postsshielding" component={Postsshielding}/>
                  <Route path="/user/postshistory" component={Postshistory}/>
                  <Route path="/user/postsmyzan" component={Postsmyzan}/>
                  <Route path="/user/myshare" component={Myshare}/>
                  <Route path="/user/shareextraction" component={Shareextraction}/>
                  <Route path="/user/commissionlist" component={Commissionlist}/>
                  <Route path="/user/rules" component={Rules}/>
                  <Route path="/user/rewards" component={Rewards}/>
                  <Route path="/user/points" component={Points}/>
                  <Route path="/user/editaddress" component={Editaddress}/>
                  <Route path="/user/addaddress" component={Addaddress}/>
                  <Route path="/user/myreport" component={Myreport}/>
                  <Route path="/user/bereport" component={Bereport}/>









                  <Route path="/orderexpress/:expressid" component={OrderExpress}/>
                  <Route path="/shopping/car" component={ShoppingCar}/>
                  <Route path="/shopping/store/:storeid" component={Store}/>
                  <Route path="/shopping/storeaptitude/:storeid" component={StoreAptitude}/>
                  
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
