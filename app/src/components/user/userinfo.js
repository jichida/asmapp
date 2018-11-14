//咨询详情页面

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./userinfo.css";

//顶部搜索
let UserHead = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">基本信息</div>
        </div>
    );
};
UserHead = withRouter(UserHead);

//首页数据
let Datalist = (props)=> {
    return (
        <div className="userInfo">
            <div className="li avatar">
                <span>我的头像</span><img src="../img/2.png" />
            </div>
            <div className="li">
                <span>会员昵称</span><span>wegweg</span>
            </div>
            <div className="li">
                <span>联系电话</span><span>18088888888</span>
            </div>
            <div className="li">
                <span>性别</span><span>男</span>
            </div>
            <div className="li">
                <span>常住</span><span>江苏省常州市武进区科教城天润科技...</span>
            </div>
            <div className="li">
                <span>简介</span><span>我是一个爱上门的忠实粉丝</span>
            </div>
            <div className="li">
                <span>收货地址</span><span>常州市武进区科教城天润科...</span>
            </div>
            <div className="li">
                <span>行业</span><span>互联网</span>
            </div>
            <div className="li">
                <span>职位名称</span><span>总经理</span>
            </div>
            <div className="li">
                <span>院校名称</span><span>常州机电学院</span>
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
            <div className="userInfoPage">
                <UserHead />
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
