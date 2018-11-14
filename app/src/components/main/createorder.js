import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./createorder.css";

//顶部搜索
let Head = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">请退货</div>
        </div>
    );
};
Head = withRouter(Head);

//顶部搜索
let Address = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="address">

            <i className="icon iconfont icon-buoumaotubiao23" />
            <div className="i">
                <div className="text">
                   <span>收货人: 李小四</span>
                   <span>19200000000</span>
                </div>
                <div className="addressinfo">
                    收货地址: 常州市武进区科教城天润科技大厦A307
                </div>
            </div>
            <i className="icon iconfont icon-xiangyou" />
            <div className='bg' style={{backgroundImage: "url('./img/line.png')"}}></div>
        </div>
    );
};
//顶部搜索
let OrderInfo = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="orderinfo">
            <div className="title">爱上门旗舰店</div>
            <div className="pli">
                <div className="img"><img src="./img/2.png" /></div>
                <div className="orderinfo">
                    <div className="name">爱上门新款血压仪送长辈十分有面子</div>
                    <div className="info"><p>颜色：黑色 / 型号 ：235ASM</p><p>版本：加强版</p></div>
                    <div className="price"><span className="pic red">￥ 250.00</span><span className="num">X 1</span></div>
                </div>

            </div>
            <div className="canshu">
                <div className="li">
                    <div>购买数量</div>
                    <div className="addtools">
                        <div className="del">-</div>
                        <input type="number" default="1" value="1" />
                        <div className="add">+</div>
                    </div>
                </div>
                <div className="li">
                    <div>配送方式</div>
                    <div><select><option value="1">快递 包邮</option></select><i className="icon iconfont icon-xiangyou" /></div>

                </div>
                <div className="li">
                    <div>使用红包</div>
                    <div><select><option value="1">新人50元红包</option></select><i className="icon iconfont icon-xiangyou" /></div>
                </div>
                <div className="li">
                    <div>支付方式</div>
                    <div><select><option value="1">支付宝</option></select><i className="icon iconfont icon-xiangyou" /></div>
                </div>
                <div className="li">
                    <div>买家留言</div>
                    <div className="liuyan"><input type="text" placeholder="选填：填写内容请和商家确认" /></div>
                </div>
            </div>
            <div className="heji"><span>共计商品1个</span><span>小计：</span><span className="red">￥ 230.00</span></div>
        </div>
    );
};


//产品详情底部
let Foot = (props)=> {
    return (
        <div className="createOrderFoot">
            <div className="leftlnk">
                <span>合计金额：</span><span className="red">￥ 2500.00</span>
            </div>
            <div className="sublnk">
                <div>提交订单</div>
            </div>
        </div>
    );
};

export class Page extends React.Component {

    constructor(props) {  
        super(props);  
        this.state = {
            p: 0,
            innerHeight : window.innerHeight
        };
    } 

    render() {
        return (
            <div className="createOrderPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <Address />
                <OrderInfo />
                <Foot />
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
