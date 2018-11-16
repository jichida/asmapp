//咨询详情页面

import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { Modal, Button } from 'antd';
import "./user.css";

//顶部搜索
let UserHead = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="userhead" onClick={()=>{poppush("/user/info")}}>
            <div className="avatar">
                <img src="./img/2.png" />
            </div>
            <div className='userinfo'>
                <div>张三丰</div>
                <div>18088888888</div>
            </div>
            <i className="icon iconfont icon-xiangyou" />
        </div>
    );
};
UserHead = withRouter(UserHead);

//导航
let Nav = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="nav">
            <div onClick={()=>{poppush("/user/Wealth")}}><span>2300</span><span>我的现金</span></div>
            <div onClick={()=>{poppush("/user/points")}}><span>2300</span><span>我的积分</span></div>
            <div onClick={()=>{poppush("/user/rewards")}}><span>2300</span><span>我的红包</span></div>
            <div onClick={()=>{poppush("/user/mycollections")}}><span>2300</span><span>我的收藏</span></div>
        </div>
    );
};
Nav = withRouter(Nav);

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {
            p: 0,
            innerHeight : window.innerHeight,
            serviceLine: false,
        };
    }
    poppush(url){
        this.props.history.push(url);
    }
    //客服热线
    serviceLine(serviceLine) {
        console.log("serviceLine")
        this.setState({ serviceLine });
    }
    render() {
        return (
            <div className="userCenterPage">
                <UserHead />
                <Nav />
                <div className="body">
                    <div className="userCenterList">
                        <div onClick={()=>{this.poppush("/order/list")}}><span>我的订单</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div onClick={()=>{this.poppush("/user/myshare")}}><span>我的分享</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div onClick={()=>{this.poppush("/user/posts")}}><span>我的帖子</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div onClick={()=>{this.poppush("/user/addresslist")}}><span>地址管理</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div onClick={()=>{this.poppush("/user/certification")}}><span>实名认证</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div onClick={()=>{this.serviceLine(true)}}><span>服务热线</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div onClick={()=>{this.poppush("/user/rules")}}><span>售后规则</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div onClick={()=>{this.poppush("/user/setting")}}><span>系统设置</span><i className="icon iconfont icon-xiangyou" /></div>
                        
                    </div>
                </div>

                <Modal
                    title=""
                    centered
                    visible={this.state.serviceLine}
                    onOk={() => this.serviceLine(false)}
                    onCancel={() => this.serviceLine(false)}
                    wrapClassName="serviceLinebox"
                    >
                    <p className="colorLnk name" style={{width: (window.innerWidth * 0.75)+"px"}}>爱上门官方服务热线</p>
                    <p className="phonenum">0519-88888888</p>
                    <a className="phonelnk colorLnk" href="tel:123456789">我要拨打</a>
                </Modal>
            </div>
        )
    }
}
Page = withRouter(Page);
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
