//我评论的帖子
import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./postsmycreate.css";

//顶部
let Head = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">我的评论</div>
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
        <div className="list">
            <div className="li" onClick={()=>{poppush()}}>
                <div className="tit">
                    <div className="left"><img src="../img/2.png" /></div>
                    <div className="right">
                        <span className="name">会飞的鱼</span>
                        <span className="color9">智能手表 2018-09-09 12:20</span>
                    </div>
                </div>
                <div className="info">
                    这里是帖子内容，说一些乱七八糟的东西，这里是帖子内容，说一些乱七八糟的东西，这里是帖子内容，说一些乱七八糟的东西
                </div>
                <div className="imglist">
                    <img src="../img/2.png" />
                    <img src="../img/2.png" />
                    <img src="../img/2.png" />
                    <img src="../img/2.png" />
                    <img src="../img/2.png" />
                    <img src="../img/2.png" />
                </div>
                <div className="mycomments">
                    <div className="tit">
                        <div className="left"><img src="../img/2.png" /></div>
                        <div className="right">
                            <span className="name colorLnk">会飞的鱼</span>
                        </div>
                    </div>
                    <div className="comments">这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容</div>
                    <div className="time"><span>2018-09-09 12:09:09</span><span className="num">209条回复</span></div>
                    <div className="zan">
                        <i className="icon iconfont icon-zan" />
                        <span className="red">38</span>
                    </div>
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
            <div className="postsmycreatePage" style={{height: window.innerHeight+"px"}}>
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
