//我的分享

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
            <div className="title">我的分享</div>
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
                    <div className="allnum">￥123124.00</div>
                    <div className="sharetext">你分享获得的佣金</div>
                </div>
            </div>
            <div className="sharelist">
                <div className="li" onClick={()=>{poppush('/user/commissionlist')}}>
                    <span>佣金明细</span>
                    <i className="icon iconfont icon-xiangyou" />
                </div>
                <div className="li">
                    <span>申请提现</span>
                    <i className="icon iconfont icon-xiangyou" />
                </div>
                <div className="li" onClick={()=>{poppush('/user/shareextraction')}}>
                    <span>提现记录</span>
                    <i className="icon iconfont icon-xiangyou" />
                </div>
                <div className="li" onClick={()=>{poppush('/user/shareinstructions')}}>
                    <span>分享说明</span>
                    <i className="icon iconfont icon-xiangyou" />
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
