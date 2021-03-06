import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { Carousel, List, Modal } from 'antd-mobile';

import "./good.css";
const Item = List.Item;

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
// class GoodsBtnList extends React.Component {
//     constructor(props) {  
//         super(props);
//         this.state = {
//             canshubox: false,
//             xuankuan : false
//         };
//     } 
//     poppush(url){
//         this.props.history.push(url);
//     }
//     onClose = key =>() => {
//         this.setState({
//           [key]: false,
//         });
//     }
//     showModal = key => (e) => {
//         e.preventDefault(); // 修复 Android 上点击穿透
//         this.setState({
//           [key]: true,
//         });
//     }
//     render() {
//         return (
//             <div className="goodsBtnList">
//                 <div onClick={this.showModal('canshubox')}><span>参数</span><i className="icon iconfont icon-xiangyou" /></div>
//                 <div onClick={this.showModal('xuankuan')}><span>选择</span><i className="icon iconfont icon-xiangyou" /></div>
//                 <Modal
//                     popup
//                     visible={this.state.canshubox}
//                     onClose={this.onClose('canshubox')}
//                     animationType="slide-up"
//                     >
//                     <List 
//                         renderHeader={() => <div>参数</div>}
//                         className="popup-list">
//                         <Item extra={'参数1值参数1值'}>参数1</Item>
//                         <Item extra={'参数1值参数2值'}>参数2</Item>
//                         <Item extra={'参数1值参数3值'}>参数3</Item>
//                         <Item extra={'参数1值参数4值'}>参数4</Item>
//                     </List>
//                 </Modal>
//                 <Modal
//                     popup
//                     visible={this.state.xuankuan}
//                     onClose={this.onClose('xuankuan')}
//                     animationType="slide-up"
//                     className="selprotype"
//                     >
//                     <List 
//                         renderHeader={() => <div>选款</div>}
//                         className="popup-list">
//                         <div className="seltype"><span>款式1</span><span>款式1</span></div>
//                     </List>
//                     <div className="selprotypesetnum">
//                         <span>数量</span>
//                         <div className="addtools">
//                             <div className="del">-</div>
//                             <input type="number" default="1" value="1" onChange={()=>{}} />
//                             <div className="add">+</div>
//                         </div>
//                     </div>
//                     <div className="selprotypesublnk">
//                         <div onClick={()=>{this.onClose('canshubox')}}>加入购物车</div>
//                         <div onClick={()=>{this.poppush('/order/createorder')}}>立刻购买</div>
//                     </div>
//                 </Modal>
//             </div>
//         );
//     }
// };
// GoodsBtnList = withRouter(GoodsBtnList);

// //评价列表
// let PingjiaList = (props)=> {
//     return (
        
//     );
// };

// //产品图文详情
// let GoodText = (props)=> {
//     return (
        
//     );
// };

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}



export class Page extends React.Component {

    constructor(props) {  
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            canshubox: false,
            xuankuan : false,
            sharebox : false,
            kefu : false,
            formdata : {
                num : 0,
                type : 0,
                price : 0
            }
        };
    }
    back(){
        this.props.history.goBack();
    }
    onClose(key){
        this.setState({
            [key]: false,
        });
    }
    poppush(url){
        this.props.history.push(url);
    }
    showModal(key){
        this.setState({
            [key]: true,
        });
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
    }

    render() {
        return (
            <div className="goodInfoPage" style={{height: window.innerHeight+"px"}}>
                <div className="goodsinfoHead">
                    <div className="goodImg">
                        <a className="backLnk"><i className="icon iconfont icon-Left" onClick={()=>{this.back()}} /></a>
                        <a className="shoppingcar"  onClick={()=>{this.poppush("/shopping/car")}}><i className="icon iconfont icon-gouwuche" /></a>
                        <a className="moreLnk"><i className="icon iconfont icon-gengduo-tianchong" /></a>
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
                    </div>
                    <div className="data">
                        <div className="nn">
                            <div className="left">
                                <span className="price">￥260.00 - 500.00</span>
                                <span className="name">爱上门血压仪</span>
                            </div>
                            <div className="right">
                                <span className="shear" onClick={()=>{this.showModal("sharebox")}}><i className="icon iconfont icon-fenxiang"/> 分享</span>
                            </div>
                        </div>
                        <div className="nm">
                            <span>快递：20.00元</span>
                            <span>月销：23243件</span>
                            <span>常州</span>
                        </div>
                    </div>
                </div>
                <List className="goodsBtnList">
                    <Item arrow="horizontal" onClick={()=>{this.showModal('canshubox')}}>参数</Item>
                    <Item arrow="horizontal" onClick={()=>{this.showModal('xuankuan')}}>选择</Item>
                </List>
                <div className="pingjialist">
                    <div className="pingjiahead">
                        <span>宝贝评价（9635）</span>
                        <span className="moreLnk">查看全部</span>
                    </div>
                    <div className="list">
                        <div className="li">
                            <div className="name"><img src="./img/2.png" /><span>会飞的鱼</span></div>
                            <div className="text"><span>快递很给力，已经是第五次在这里购买了，每次都是当天下单，第二天上午 就能收到货，这款机器我用的十分开心。五星好评！</span></div>
                            <div className="img">
                                <img src="./img/2.png" alt="" />
                                <img src="./img/2.png" alt="" />
                                <img src="./img/2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goodText">
                    <div className="goodTextHead">
                        <span>爱上门旗舰店</span>
                        <span className="lnk" onClick={()=>{this.poppush('/shopping/store/storeid')}}>查看店铺</span>
                    </div>
                    <div className="text">
                        产品图文详情
                    </div>
                </div>
                <div className="goodsFoot">
                    <div className="leftlnk">
                        <div onClick={()=>{this.poppush('/shopping/store/storeid')}}><i className="icon iconfont icon-dianpu" /><span>店铺</span></div>
                        <div onClick={()=>{this.showModal("kefu")}}><i className="icon iconfont icon-kefu" /><span>客服</span></div>
                        <div><i className={this.props.isCollection?"icon iconfont icon-shoucang warning":"icon iconfont icon-shoucang1"} /><span>收藏</span></div>
                    </div>
                    <div className="sublnk">
                        <div onClick={()=>{this.showModal('xuankuan')}}>加入购物车</div>
                        <div onClick={()=>{this.showModal('xuankuan')}}>立刻购买</div>
                    </div>
                </div>
                <Modal
                    popup
                    visible={this.state.canshubox}
                    onClose={()=>{this.onClose("canshubox")}}
                    animationType="slide-up"
                    >
                    <List renderHeader={() => <div>产品参数</div>} className="popup-list">
                        {this.state.data.map((i, index) => (
                            <List.Item key={index} extra={"参数的值"+i}>参数{i}</List.Item>
                        ))}
                    </List>
                </Modal>
                <Modal
                    popup
                    visible={this.state.xuankuan}
                    onClose={()=>{this.onClose('xuankuan')}}
                    animationType="slide-up"
                    className="selprotype"
                    >
                    <List 
                        renderHeader={() => <div>选款</div>}
                        className="popup-list">
                        <div className="seltype"><span className="sel">款式1</span><span>款式2</span></div>
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
                        <div onClick={()=>{this.onClose('xuankuan')}}>加入购物车</div>
                        <div onClick={()=>{this.poppush('/order/createorder')}}>立刻购买</div>
                    </div>
                </Modal>

                <Modal
                    visible={this.state.sharebox}
                    transparent
                    maskClosable={false}
                    onClose={()=>{this.onClose('sharebox')}}
                    title="分享到"
                    footer={[{ text: 'Ok', onPress: () => { this.onClose('sharebox'); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    >
                    <div className="ShareBox">
                        <div>腾讯</div>
                        <div>微信</div>
                    </div>
                </Modal>

                <Modal
                    visible={this.state.kefu}
                    transparent
                    maskClosable={false}
                    onClose={()=>{this.onClose('kefu')}}
                    title="联系到客服"
                    footer={[{ text: 'Ok', onPress: () => { this.onClose('kefu'); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    >
                    <div className="ShareBox">
                        <div>客服热线</div>
                        <div>18888888888</div>
                    </div>
                </Modal>
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    let isCollection = true; //是否已经收藏过
    return {...userlogin, isCollection};
}
Page = withRouter(Page);
Page = connect(stores)(Page);
export default Page;
