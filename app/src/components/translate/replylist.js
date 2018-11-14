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
    return (
        <div className="head">
            <div className="leftlnk"><span className="back"><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">3条回复</div>
        </div>
    );
};
//首页数据
let DataList = (props)=> {
    return (
        <div className="datalist reply">
            <div className="li">
                <div className="userinfo">
                    <div className="left">
                        <img className="avatar" src="./img/2.png" />
                    </div>
                    <div className="right">
                        <div className="name">会飞的鱼</div>
                        <div className="equipment">
                            你们都是在哪里买的？为什么我找了半天也找不到，淘宝上也没有，这么稀缺？？？
在哪里有卖？我也想要一个，求链接！
                        </div>
                        <div className="time"><span className='t'>2018-11-02 14:49:30</span><span className="b">回复</span></div>
                    </div>
                </div>
                <span className="zan zaned"><i className="icon iconfont icon-zan" /><span>234</span></span>
            </div>
            <div className="li">
                <div className="userinfo">
                    <div className="left">
                        <img className="avatar" src="./img/2.png" />
                    </div>
                    <div className="right">
                        <div className="name">会飞的鱼</div>
                        <div className="equipment">
                            你们都是在哪里买的？为什么我找了半天也找不到，淘宝上也没有，这么稀缺？？？
在哪里有卖？我也想要一个，求链接！
                        </div>
                        <div className="time"><span className='t'>2018-11-02 14:49:30</span><span className="b">回复</span></div>
                    </div>
                </div>
                <span className="zan"><i className="icon iconfont icon-zan" /></span>
            </div>
            <div className="li">
                <div className="userinfo">
                    <div className="left">
                        <img className="avatar" src="./img/2.png" />
                    </div>
                    <div className="right">
                        <div className="name">会飞的鱼</div>
                        <div className="equipment">
                            你们都是在哪里买的？为什么我找了半天也找不到，淘宝上也没有，这么稀缺？？？
在哪里有卖？我也想要一个，求链接！
                        </div>
                        <div className="time"><span className='t'>2018-11-02 14:49:30</span><span className="b">回复</span></div>
                    </div>
                </div>
                <span className="zan"><i className="icon iconfont icon-zan" /></span>
            </div>

        </div>
    );
};

//底部回复控件
let FootTools = (props)=> {
    return (
        <div className="footools reply">
            <input type="text" placeholder="发表评论" />
            <span><i className="icon iconfont icon-zan1" /></span>
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
                <div className="body">
                    <DataList />
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
