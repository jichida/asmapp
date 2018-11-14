//我屏蔽的帖子
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
            <div className="title">我的屏蔽的帖子</div>
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
            <div className="li shielding" onClick={()=>{poppush()}}>
                <div className="tit">
                    <div className="left"><img src="../img/2.png" /></div>
                    <div className="right">
                        <span className="name">会飞的鱼</span>
                        <span className="color9">共12个帖子</span>
                    </div>
                    <div className="shieldingoff">取消屏蔽</div>
                </div>
            </div>
            <div className="li shielding" onClick={()=>{poppush()}}>
                <div className="tit">
                    <div className="left"><img src="../img/2.png" /></div>
                    <div className="right">
                        <span className="name">会飞的鱼</span>
                        <span className="color9">共12个帖子</span>
                    </div>
                    <div className="shieldingoff">取消屏蔽</div>
                </div>
            </div>
            <div className="li shielding" onClick={()=>{poppush()}}>
                <div className="tit">
                    <div className="left"><img src="../img/2.png" /></div>
                    <div className="right">
                        <span className="name">会飞的鱼</span>
                        <span className="color9">共12个帖子</span>
                    </div>
                    <div className="shieldingoff">取消屏蔽</div>
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
