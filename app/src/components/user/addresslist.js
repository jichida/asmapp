//咨询详情页面

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./addresslist.css";

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
            <div className="title">地址管理</div>
            <div className="rightlnk"  onClick={()=>{poppush('/user/addaddress')}}>+ 添加</div>

        </div>
    );
};
UserHead = withRouter(UserHead);

//首页数据
let Datalist = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    return (
        <div className="addresslist">
            <div>
                <span className="a">张</span>
                <div className="info">
                    <div>张小三 18088888888</div>
                    <div><span className="defaultAddress">默认地址</span><span>江苏省常州市武进区科教城天润科技大厦A307</span></div>
                </div>
                <div className="editlnk" onClick={()=>{poppush('/user/editaddress')}}>编辑</div>
            </div>
            <div>
                <span className="a">张</span>
                <div className="info">
                    <div>张小三 18088888888</div>
                    <div><span>江苏省常州市武进区科教城天润科技大厦A307</span></div>
                </div>
                <div className="editlnk" onClick={()=>{poppush('/user/editaddress')}}>编辑</div>
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
            <div className="addressListPage" style={{height: window.innerHeight+"px"}}>
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
