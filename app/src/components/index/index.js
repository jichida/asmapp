import React,{ Component } from 'react';
import { TabBar } from 'antd-mobile';
import Community from '../community';
import {withRouter} from 'react-router-dom';
//咨询
import Translate from '../translate/translate.js';
import Main from '../main/main.js';


class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
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

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={<i class="icon iconfont icon-shouye" />}
            selectedIcon={<i class="icon iconfont icon-shouye sel" />}
            selected={this.state.selectedTab === 'index'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'index',
              });
            }}
            data-seed="logId"
          >
            <Main />
          </TabBar.Item>
          <TabBar.Item
            title="智能"
            key="智能"  //icon-zhineng
            icon={<i class="icon iconfont icon-zhineng" />}
            selectedIcon={<i class="icon iconfont icon-zhineng sel" />}
            selected={this.state.selectedTab === 'zhineng'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'zhineng',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('智能')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i class="icon iconfont icon-xinxi" />}
            selectedIcon={<i class="icon iconfont icon-xinxi sel" />}
            title="咨询"
            key="咨询"
            badge={'new'}
            selected={this.state.selectedTab === 'translate'}
            onPress={() => {
              this.setState({ selectedTab: 'translate' });
            }}
            data-seed="logId1"
          >
            <Translate />
          </TabBar.Item>
          <TabBar.Item
            icon={<i class="icon iconfont icon-31jifen" />}
            selectedIcon={<i class="icon iconfont icon-31jifen sel" />}
            title="积分"
            key="积分"
            dot
            selected={this.state.selectedTab === 'jifen'}
            onPress={() => {
              this.setState({
                selectedTab: 'jifen',
              });
            }}
          >
            {this.renderContent('积分')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i class="icon iconfont icon-yonghu" />}
            selectedIcon={<i class="icon iconfont icon-yonghu sel" />}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'user'}
            onPress={() => {
              this.setState({
                selectedTab: 'user',
              });
            }}
          >
            {this.renderContent('我的')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

TabBarExample = withRouter(TabBarExample);
export default TabBarExample;
