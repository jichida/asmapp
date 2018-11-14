//我的财富

import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./wealth.css";

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
            <div className="title">我的现金</div>
            <div className="rightlnk"><span>充值</span></div>
        </div>
    );
};
Head = withRouter(Head);

//首页数据
let Datalist = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    return (
        <div className="data">
            <div className="datahead">
                <div className="datainfo">
                    <div className="allnum">123124.00</div>
                    <div className="typsnum">
                        <div><span>10000</span><span>可提现(元)</span></div>
                        <div><span>14000</span><span>不可提现(元)</span></div>
                    </div>
                </div>
                <div className="headlnk">提现申请</div>
            </div>
            <div className="listhead">
                <span>账单明细</span>
                <span onClick={()=>{poppush("/user/bill")}}>查看详情 <i className="icon iconfont icon-xiangyou" /></span>
            </div>
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
Datalist = withRouter(Datalist);



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
            <div className="wealthPage" style={{height: window.innerHeight+"px"}}>
                <Head />
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
