import React,{ Component } from 'react';
import { TabBar } from 'antd-mobile';
import Community from '../community';
import {withRouter} from 'react-router-dom';


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
        <Community />
      </div>
    );
  }

  poppush(url){
    this.props.history.push(url);
  }

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
            icon={<i className="icon iconfont icon-shouye" />}
            selectedIcon={<i className="icon iconfont icon-shouye sel" />}
            selected={this.state.selectedTab === 'index'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'index',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('首页')}
          </TabBar.Item>
          <TabBar.Item
            title="智能"
            key="智能"  //icon-zhineng
            icon={<i className="icon iconfont icon-zhineng" />}
            selectedIcon={<i className="icon iconfont icon-zhineng sel" />}
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
            icon={<i className="icon iconfont icon-xinxi" />}
            selectedIcon={<i className="icon iconfont icon-xinxi sel" />}
            title="咨询"
            key="咨询"
            badge={'new'}
            selected={this.state.selectedTab === 'translate'}
            onPress={() => {
              this.setState({ selectedTab: 'translate' });
              this.poppush('/translate');
            }}
            data-seed="logId1"
          >
            {this.renderContent('咨询')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="icon iconfont icon-31jifen" />}
            selectedIcon={<i className="icon iconfont icon-31jifen sel" />}
            title="积分"
            key="积分"
            dot
            selected={this.state.selectedTab === 'jife'}
            onPress={() => {
              this.setState({
                selectedTab: 'jife',
              });
            }}
          >
            {this.renderContent('积分')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="icon iconfont icon-yonghu" />}
            selectedIcon={<i className="icon iconfont icon-yonghu sel" />}
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
