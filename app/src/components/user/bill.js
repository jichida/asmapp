//我的账单

import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./bill.css";

//顶部搜索
let Head = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">账单明细</div>
        </div>
    );
};
Head = withRouter(Head);

let Nav = (props)=> {
    return (
        <div className="nav">
            <span className="sel">全部账单</span>
            <span>只看交易</span>
            <span>只看提现</span>
            <span>只看充值</span>
        </div>
    );
};
Head = withRouter(Head);

//首页数据
let Datalist = (props)=> {
    return (
        <div className="data">
            <div className="datalist">
                <div className="li month">
                    <span>11月</span>
                </div>
                <div className="li">
                    <span className="l1">05号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4 warning">提现处理中 </span>
                </div>
                <div className="li">
                    <span className="l1">03号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4">交易完成 </span>
                </div>
                <div className="li">
                    <span className="l1">01号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4">交易完成 </span>
                </div>
                <div className="li">
                    <span className="l1">05号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4 warning">提现处理中 </span>
                </div>

                <div className="liinfo">
                    <div><span className="f18">￥10000.00 </span><span className="warning">(处理中)</span></div>
                    <div>付款方:爱上门账户余额(可提现部分)</div>
                    <div>收款方: 234325235346346(工商银行)(李小四)</div>
                    <div>商品说明: 提现(约30天到账)</div>
                    <div>创建时间: 2018-09-09 11:20:22</div>
                    <div>订单号: 3235235222352</div>
                </div>

                <div className="li">
                    <span className="l1">03号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4">交易完成 </span>
                </div>
                <div className="li">
                    <span className="l1">01号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4">交易完成 </span>
                </div>
                <div className="li month">
                    <span>10月</span>
                </div>
                <div className="li">
                    <span className="l1">05号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4 warning">提现处理中 </span>
                </div>
                <div className="li">
                    <span className="l1">05号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4">交易完成 </span>
                </div>
                <div className="li">
                    <span className="l1">05号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4">交易完成 </span>
                </div>
                <div className="li month">
                    <span>10月</span>
                </div>
                <div className="li">
                    <span className="l1">05号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4 warning">提现处理中 </span>
                </div>
                <div className="li">
                    <span className="l1">05号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4">交易完成 </span>
                </div>
                <div className="li">
                    <span className="l1">05号</span>
                    <span className="l2">支付宝</span>
                    <span className="l3">￥300.00</span>
                    <span className="l4">交易完成 </span>
                </div>
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
            <div className="billPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <Nav />
                <div className="body">
                    <Datalist />
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
