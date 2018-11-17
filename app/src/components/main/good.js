import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { Carousel, WingBlank, WhiteSpace, List, Modal } from 'antd-mobile';

import "./good.css";
const Item = List.Item;
const Brief = Item.Brief;

//顶部搜索
// let GoodsImg = (props)=> {
//     let back=()=>{
//         props.history.goBack();
//     }
//     return (
        
//     );
// };
// GoodsImg = withRouter(GoodsImg);
//产品详情底部
// let GoodsFoot = (props)=> {
//     let poppush=(url)=>{
//         props.history.push(url);
//     }
//     return (
        
//     );
// };
// GoodsFoot = withRouter(GoodsFoot);
//产品选项组
class GoodsBtnList extends React.Component {
    constructor(props) {  
        super(props);
        this.state = {
            canshubox: false,
            xuankuan : false
        };
    } 
    poppush(url){
        this.props.history.push(url);
    }
    onClose = key =>() => {
        this.setState({
          [key]: false,
        });
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
    }
    render() {
        return (
            <div className="goodsBtnList">
                <div onClick={this.showModal('canshubox')}><span>参数</span><i className="icon iconfont icon-xiangyou" /></div>
                <div onClick={this.showModal('xuankuan')}><span>选择</span><i className="icon iconfont icon-xiangyou" /></div>
                <Modal
                    popup
                    visible={this.state.canshubox}
                    onClose={this.onClose('canshubox')}
                    animationType="slide-up"
                    >
                    <List 
                        renderHeader={() => <div>参数</div>}
                        className="popup-list">
                        <Item extra={'参数1值参数1值'}>参数1</Item>
                        <Item extra={'参数1值参数2值'}>参数2</Item>
                        <Item extra={'参数1值参数3值'}>参数3</Item>
                        <Item extra={'参数1值参数4值'}>参数4</Item>
                    </List>
                </Modal>
                <Modal
                    popup
                    visible={this.state.xuankuan}
                    onClose={this.onClose('xuankuan')}
                    animationType="slide-up"
                    className="selprotype"
                    >
                    <List 
                        renderHeader={() => <div>选款</div>}
                        className="popup-list">
                        <div className="seltype"><span>款式1</span><span>款式1</span></div>
                    </List>
                    <div className="selprotypesetnum">
                        <span>数量</span>
                        <div className="addtools">
                            <div className="del">-</div>
                            <input type="number" default="1" value="1" onChange={()=>{}} />
                            <div className="add">+</div>
                        </div>
                    </div>
                    <div className="selprotypesublnk">
                        <div onClick={()=>{this.onClose('canshubox')}}>加入购物车</div>
                        <div onClick={()=>{this.poppush('/order/createorder')}}>立刻购买</div>
                    </div>
                </Modal>
            </div>
        );
    }
};
GoodsBtnList = withRouter(GoodsBtnList);

//评价列表
let PingjiaList = (props)=> {
    return (
        <div className="pingjialist">
            <div className="pingjiahead">
                <span>宝贝评价（9635）</span>
                <span className="moreLnk">查看全部</span>
            </div>
            <div className="list">
                <div className="li">
                    <div className="name"><img src="./img/2.png" /><span>会飞的鱼</span></div>
                    <div className="text"><span>快递很给力，已经是第五次在这里购买了，每次都是当天下单，第二天上午 就能收到货，这款机器我用的十分开心。五星好评！</span></div>
                    <div className="img"><img src="./img/2.png" /><img src="./img/2.png" /><img src="./img/2.png" /></div>
                </div>
            </div>
        </div>
    );
};

//产品图文详情
let GoodText = (props)=> {
    return (
        <div className="goodText">
            <div className="goodTextHead">
                <span>爱上门旗舰店</span>
                <span className="lnk">查看店铺</span>
            </div>
            <div className="text">
                产品图文详情
            </div>
        </div>
    );
};


export class Page extends React.Component {

    constructor(props) {  
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            canshubox: false,
            xuankuan : false
        };
    } 
    poppush(url){
        this.props.history.push(url);
    }
    onClose = key =>() => {
        this.setState({
          [key]: false,
        });
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
    }
    back(){
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="goodInfoPage" style={{height: window.innerHeight+"px"}}>
                <div className="goodsinfoHead">
                    <div className="goodImg">
                        <a className="backLnk"><i className="icon iconfont icon-Left" onClick={this.back} /></a>
                        <a className="shoppingcar" onClick={()=>{this.poppush("/shopping/car")}}><i className="icon iconfont icon-gouwuche" /></a>
                        <a className="moreLnk"><i className="icon iconfont icon-gengduo-tianchong" /></a>
                        <WingBlank>
                            <Carousel
                              autoplay={false}
                              infinite
                              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                              afterChange={index => console.log('slide to', index)}
                            >
                              {this.state.data.map(val => (
                                <a
                                  key={val}
                                  style={{ display: 'inline-block', width: '100%' }}
                                >
                                  <img
                                    src="./img/1.png"
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                      // fire window resize event to change height
                                      window.dispatchEvent(new Event('resize'));
                                      this.setState({ imgHeight: 'auto' });
                                    }}
                                  />
                                </a>
                              ))}
                            </Carousel>
                          </WingBlank>
                    </div>
                    <div className="data">
                        <div className="nn">
                            <div className="left">
                                <span className="price">￥260.00 - 500.00</span>
                                <span className="name">爱上门血压仪</span>
                            </div>
                            <div className="right">
                                <span className="shear"><i className="icon iconfont icon-fenxiang"/> 分享</span>
                            </div>
                        </div>
                        <div className="nm">
                            <span>快递：20.00元</span>
                            <span>月销：23243件</span>
                            <span>常州</span>
                        </div>
                    </div>
                </div>
                <div className="goodsBtnList">
                    <div onClick={this.showModal('canshubox')}><span>参数</span><i className="icon iconfont icon-xiangyou" /></div>
                    <div onClick={this.showModal('xuankuan')}><span>选择</span><i className="icon iconfont icon-xiangyou" /></div>
                    <Modal
                        popup
                        visible={this.state.canshubox}
                        onClose={this.onClose('canshubox')}
                        animationType="slide-up"
                        >
                        <List 
                            renderHeader={() => <div>参数</div>}
                            className="popup-list">
                            <Item extra={'参数1值参数1值'}>参数1</Item>
                            <Item extra={'参数1值参数2值'}>参数2</Item>
                            <Item extra={'参数1值参数3值'}>参数3</Item>
                            <Item extra={'参数1值参数4值'}>参数4</Item>
                        </List>
                    </Modal>
                    <Modal
                        popup
                        visible={this.state.xuankuan}
                        onClose={this.onClose('xuankuan')}
                        animationType="slide-up"
                        className="selprotype"
                        >
                        <List 
                            renderHeader={() => <div>选款</div>}
                            className="popup-list">
                            <div className="seltype"><span>款式1</span><span>款式1</span></div>
                        </List>
                        <div className="selprotypesetnum">
                            <span>数量</span>
                            <div className="addtools">
                                <div className="del">-</div>
                                <input type="number" default="1" value="1" onChange={()=>{}} />
                                <div className="add">+</div>
                            </div>
                        </div>
                        <div className="selprotypesublnk">
                            <div onClick={()=>{this.onClose('canshubox')}}>加入购物车</div>
                            <div onClick={()=>{this.onClose('canshubox')}}>立刻购买</div>
                        </div>
                    </Modal>
                </div>
                <PingjiaList />
                <GoodText />
                <div className="goodsFoot">
                    <div className="leftlnk">
                        <div><i className="icon iconfont icon-dianpu" /><span>店铺</span></div>
                        <div><i className="icon iconfont icon-kefu" /><span>客服</span></div>
                        <div><i className="icon iconfont icon-shoucang1" /><span>收藏</span></div>
                    </div>
                    <div className="sublnk">
                        <div onClick={()=>{this.onClose('canshubox')}}>加入购物车 </div>
                        <div onClick={()=>{this.onClose('canshubox')}}>立刻购买</div>
                    </div>
                </div>
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
