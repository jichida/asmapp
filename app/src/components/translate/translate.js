//咨询页面组件

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

    return (
        <div className="head">
            <div className="leftlnk"><span className="city">常州 <i class="icon iconfont icon-down" /></span></div>
            <div className="title">咨询</div>
            <div className="rightlnk"><span className="addPost" onClick={()=>{poppush('/translate/add')}}>+ 发帖</span></div>
        </div>
    );
};
Head =  withRouter(Head);

//分类导航
let Nav = (props)=> {

    return (
        <div className="nav">
            <div className="sel">全部帖子</div>
            <div>智能家居</div>
            <div>智能家电</div>
            <div>健康穿戴</div>
        </div>
    );
};

//首页滚动图片
let MainSrcollImg = (props)=> {
    return (
        <div className="scrollImg">
            <br/>滚动图片<br/><br/>
        </div>
    );
};

//首页数据
let DataList = (props)=> {
    return (
        <div className="datalist">
            <div className="li">
                <div className="userinfo">
                    <div className="left">
                        <img className="avatar" src="./img/2.png" />
                    </div>
                    <div className="right">
                        <div className="name">会飞的鱼</div>
                        <div className="equipment">智能手表 2018-11-02 14:29:30</div>
                    </div>
                </div>
                <div>
                    <div className="imglist">
                        <img src="./img/2.png" />
                        <img src="./img/2.png" />
                        <img src="./img/2.png" />
                        <img src="./img/2.png" />
                    </div>
                    <div className="infotext">
                        智能穿戴设备是应用穿戴式技术对日常穿戴进行智能化设计、开发出可以穿戴的设备的总称，如手表、手环、眼镜、服饰等......
                    </div>
                </div>
                <div className="attribute">
                    <span>评论</span>
                    <span>点赞</span>
                    <span>收藏</span>
                    <span>举报</span>
                    <span>屏蔽</span>
                </div>
            </div>
            <div className="li">
                <div className="userinfo">
                    <div className="left">
                        <img className="avatar" src="./img/2.png" />
                    </div>
                    <div className="right">
                        <div className="name">会飞的鱼</div>
                        <div className="equipment">智能手表 2018-11-02 14:29:30</div>
                    </div>
                </div>
                <div>
                    <div className="imglist">
                        <img src="./img/2.png" />
                        <img src="./img/2.png" />
                        <img src="./img/2.png" />
                        <img src="./img/2.png" />
                    </div>
                    <div className="infotext">
                        智能穿戴设备是应用穿戴式技术对日常穿戴进行智能化设计、开发出可以穿戴的设备的总称，如手表、手环、眼镜、服饰等......
                    </div>
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
        }
    }
    render() {
        return (
            <div className="translate">
                <Head />
                <div className="body">
                    <img src="./img/1.png" className="img" />
                    <Nav />
                    <DataList />
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
