//咨询详情页面

import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
import { Switch } from 'antd';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./editaddress.css";

//顶部搜索
let Head = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">编辑地址</div>
            <div className="rightlnk">删除</div>
        </div>
    );
};
Head = withRouter(Head);

//首页数据
let Datalist = (props)=> {
    let onChange=(checked)=>{
        console.log(`switch to ${checked}`);
    }
    return (
        <div className="editaddressform">
            <div className="f">
                <div className="li"><span className="t colorLnk">收件人</span><input type="text" value="李小四" /></div>
                <div className="li"><span className="t colorLnk">电话</span><input type="text" value="18088888888" /></div>
                <div className="li"><span className="t colorLnk">收货地址</span><span className="selarea">选择区域 <i className="icon iconfont icon-xiangyou"/></span></div>
                <div className="li"><span className="t colorLnk">街道信息</span><input type="text" value="科教城天润科技大厦A307" /></div>
            </div>
            <div className="f">
                <div className="li lilnk"><span className="t colorLnk">设为默认地址</span><Switch defaultChecked onChange={onChange} /></div>
            </div>
            <div className="fbtn">保存</div>
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
            <div className="editAddressPage" style={{height: window.innerHeight+"px"}}>
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
