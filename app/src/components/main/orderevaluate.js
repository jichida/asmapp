//待评价
import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./orderevaluate.css";

//顶部搜索
let Head = (props)=> {
    let back=()=>{ props.history.goBack(); }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">待发货</div>
        </div>
    );
};
Head = withRouter(Head);

//首页数据
let Data = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    return (
        <div className="body">
            <div className="datahead">
                <div className="pli">
                    <div className="img"><img src="./img/2.png" alt="" /></div>
                    <div className="orderinfo">
                        <div className="name">爱上门新款血压仪送长辈十分有面子</div>
                        <div className="info"><p>颜色：黑色 / 型号 ：235ASM</p><p>版本：加强版</p></div>
                        <div className="price"><span className="pic red">￥ 250.00</span><span className="num">X 1</span></div>
                    </div>
                </div>
            </div>
            <div className="level">
                <div><i className="icon iconfont icon-haoping" /><span>好评</span></div>
                <div><i className="icon iconfont icon-zhongping" /><span>中评</span></div>
                <div><i className="icon iconfont icon-chaping" /><span>差评</span></div>
            </div>
            <div className="textarea">
                <textarea placeholder="输入您的评价"></textarea>
            </div>
            <div className="imglist">
                <img src="./img/2.png" alt="" />
                <img src="./img/2.png" alt="" />
                <img src="./img/2.png" alt="" />
                <span className="imglistbtn">
                    <i className="icon iconfont icon-camera" />
                </span>
            </div>
            <div className="starbox">
                <div className="li">
                    <div className="title">商品</div>
                    <div className="star">
                        <i className="icon iconfont icon-shoucang" />
                        <i className="icon iconfont icon-shoucang" />
                        <i className="icon iconfont icon-shoucang" />
                        <i className="icon iconfont icon-shoucang off" />
                        <i className="icon iconfont icon-shoucang off" />
                    </div>
                </div>
                <div className="li">
                    <div className="title">物流</div>
                    <div className="star">
                        <i className="icon iconfont icon-shoucang" />
                        <i className="icon iconfont icon-shoucang" />
                        <i className="icon iconfont icon-shoucang" />
                        <i className="icon iconfont icon-shoucang off" />
                        <i className="icon iconfont icon-shoucang off" />
                    </div>
                </div>
                <div className="li">
                    <div className="title">服务</div>
                    <div className="star">
                        <i className="icon iconfont icon-shoucang" />
                        <i className="icon iconfont icon-shoucang" />
                        <i className="icon iconfont icon-shoucang" />
                        <i className="icon iconfont icon-shoucang off" />
                        <i className="icon iconfont icon-shoucang off" />
                    </div>
                </div>
            </div>
        </div>
    );
};
Data = withRouter(Data);

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {};
    } 
    render() {
        return (
            <div className="orderEvaluatePage"  style={{height: window.innerHeight+"px"}}>
                <Head />
                <Data />
                <div className="foot">发表评价</div>
            </div>
        )
    }
}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = withRouter(Page);
Page = connect(stores)(Page);
export default Page;
