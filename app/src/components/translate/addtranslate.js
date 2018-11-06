//咨询详情页面

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./translate.css";

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
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i class="icon iconfont icon-Left" /></span></div>
            <div className="title">发布新帖</div>
        </div>
    );
};
Head = withRouter(Head);
//首页数据
let TranslateInfo = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    return (
        <div className="addTranslateInfo">
            <div className="userinfo">
                <div className="left">
                    <img className="avatar" src="./img/2.png" />
                </div>
                <div className="right">
                    <div className="name">会飞的鱼</div>
                    <div className="equipment">智能手表 2018-09-09 09:20:20</div>
                </div>
            </div>
            <div className="proinfo" onClick={()=>{poppush("/translate/selorder")}}>
                <span className="shopping"><i class="icon iconfont icon-shopping" style={{color:"#0070c0"}} /></span>
                <span className="proname">您购买的相关产品/服务</span>
                <span className="selicon"><i class="icon iconfont icon-nvxingfuben" /></span>
            </div>
            <div className="inputarea">
                <textarea placeholder="fwfwe"></textarea>
            </div>
            <div className="imglist">
                <img className="avatar" src="./img/2.png" />
                <img className="avatar" src="./img/2.png" />
                <img className="avatar" src="./img/2.png" />
                <img className="avatar" src="./img/2.png" />
            </div>
            <div className="subbtn">确认发布</div>
        </div>
    );
};
TranslateInfo = withRouter(TranslateInfo);
//底部回复控件
let FootTools = (props)=> {
    return (
        <div className="footools reply addTranslateInfoFoot">
            <span><i class="icon iconfont icon-jianpan" style={{fontSize:"34px"}} /><i class="icon iconfont icon-nvxingfuben" /></span>
            <span><i class="icon iconfont icon-tupian" style={{fontSize:"30px"}} /></span>
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
            <div className="translate" style={{height: window.innerHeight+"px"}}>
                <Head />
                <div className="body addTranslate">
                    <TranslateInfo />
                </div>
                <FootTools />
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
