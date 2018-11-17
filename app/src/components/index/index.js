import React,{ Component } from 'react';
import { TabBar } from 'antd-mobile';
import Community from '../community';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//咨询
import Translate from '../translate/translate.js';
import UserCenter from '../user/user.js';
import Main from '../main/main.js';
import Device from '../device/device.js';
import IntegralMain from '../integral/main.js';
//action
import { set_mainSelectedTab } from '../../actions/index.js';


class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'index',
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <br />
        <br />
        <br />
      </div>
    );
  }

  // poppush(url){
  //   this.props.history.push(url);
  // }
  onPressFn (payload){
      this.props.dispatch(set_mainSelectedTab(payload));
  }

  render() {

    const { mainSelectedTab } = this.props;
    console.log("mainSelectedTab");
    console.log(mainSelectedTab);

    return (
      <div className="footContainer" style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={<i className="icon iconfont icon-shouye" />}
            selectedIcon={<i className="icon iconfont icon-shouye sel" />}
            selected={ mainSelectedTab === 'index'}
            onPress={() => {this.onPressFn("index")}}
            data-seed="logId"
          >
            <Main />
          </TabBar.Item>
          <TabBar.Item
            title="智能"
            key="智能"  //icon-zhineng
            icon={<i className="icon iconfont icon-zhineng" />}
            selectedIcon={<i className="icon iconfont icon-zhineng sel" />}
            selected={ mainSelectedTab === 'zhineng'}
            onPress={() => {this.onPressFn("zhineng")}}
            data-seed="logId"
          >
            <Device />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="icon iconfont icon-xinxi" />}
            selectedIcon={<i className="icon iconfont icon-xinxi sel" />}
            title="咨询"
            key="咨询"
            selected={ mainSelectedTab === 'translate'}
            onPress={() => {this.onPressFn("translate")}}
            data-seed="logId1"
          >
            <Translate />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="icon iconfont icon-31jifen" />}
            selectedIcon={<i className="icon iconfont icon-31jifen sel" />}
            title="积分"
            key="积分"
            selected={ mainSelectedTab === 'jifen'}
            onPress={() => {this.onPressFn("jifen")}}
          >
            <IntegralMain />
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="icon iconfont icon-yonghu" />}
            selectedIcon={<i className="icon iconfont icon-yonghu sel" />}
            title="我的"
            key="我的"
            selected={ mainSelectedTab === 'user'}
            onPress={() => {this.onPressFn("user")}}
          >
            <UserCenter />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

const stores = ({app}) => {
    return {...app};
}

TabBarExample = connect(stores)(TabBarExample);
TabBarExample = withRouter(TabBarExample);
export default TabBarExample;
