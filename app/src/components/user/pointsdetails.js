//积分详情
import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./wealthdetails.css";

//顶部搜索
let Head = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">积分明细</div>
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
                    <span className="l2">分享-智能血糖仪</span>
                    <span className="l3">+ 300.00</span>
                    <span className="l4 warning">获得积分 </span>
                </div>
                <div className="li">
                    <span className="l1">03号</span>
                    <span className="l2">退货-智能手表</span>
                    <span className="l3">+ 300.00</span>
                    <span className="l4">退分成功 </span>
                </div>
                <div className="liinfo">
                    <div><span className="f18">积分 10000</span><span className="warning">(处理中)</span></div>
                    <div>付分方: 不吃鱼的猫</div>
                    <div>收分方: 爱上门旗舰店(积分商城)</div>
                    <div>商品说明: 退货返还</div>
                    <div>创建时间: 2018-09-09 11:20:22</div>
                    <div>订单号: 3235235222352</div>
                </div>
                <div className="li">
                    <span className="l1">01号</span>
                    <span className="l2">智能手表</span>
                    <span className="l3">- 50.00</span>
                    <span className="l4">交易完成 </span>
                </div>
                <div className="li month">
                    <span>10月</span>
                </div>
                <div className="li">
                    <span className="l1">05号</span>
                    <span className="l2">分享-智能血糖仪</span>
                    <span className="l3">+ 300.00</span>
                    <span className="l4 warning">获得积分 </span>
                </div>
                <div className="li">
                    <span className="l1">03号</span>
                    <span className="l2">退货-智能手表</span>
                    <span className="l3">+ 300.00</span>
                    <span className="l4">退分成功 </span>
                </div>
                <div className="li">
                    <span className="l1">01号</span>
                    <span className="l2">智能手表</span>
                    <span className="l3">- 50.00</span>
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
