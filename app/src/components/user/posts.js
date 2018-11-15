//我的帖子

import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';

//顶部
let Head = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">我的帖子</div>
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
        <div className="userCenterList">
            <div onClick={()=>{poppush("/user/postsmycreate")}}>
                <span>我发布的</span><i className="icon iconfont icon-xiangyou" />
            </div>
            <div onClick={()=>{poppush("/user/postsmycomments")}}>
                <span>我的评论</span><i className="icon iconfont icon-xiangyou" />
            </div>
            <div onClick={()=>{poppush("/user/postsmyzan")}}>
                <span>我的点赞</span><i className="icon iconfont icon-xiangyou" />
            </div>
            <div onClick={()=>{poppush("/user/postscollection")}}>
                <span>我的收藏</span><i className="icon iconfont icon-xiangyou" />
            </div>
            <div onClick={()=>{poppush("/user/myreport")}}>
                <span>我的举报</span><i className="icon iconfont icon-xiangyou" />
            </div>
            <div onClick={()=>{poppush("/user/postsshielding")}}>
                <span>我的屏蔽</span><i className="icon iconfont icon-xiangyou" />
            </div>
            <div onClick={()=>{poppush("/user/bereport")}}>
                <span>被举报帖</span><i className="icon iconfont icon-xiangyou" />
            </div>
            <div onClick={()=>{poppush("/user/postshistory")}}>
                <span>浏览历史</span><i className="icon iconfont icon-xiangyou" />
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
            <div className="userCenterPage">
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
