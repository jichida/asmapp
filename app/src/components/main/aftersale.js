import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./aftersale.css";

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
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">售后</div>
        </div>
    );
};
Head = withRouter(Head);

//顶部搜索
let OrderInfo = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="orderinfo">
            <div className="left">
                <img src="./img/2.png" />
            </div>
            <div className="right">
                <span className="name">爱上门血压仪[2018增强版]</span>
                <div className="text">
                   <span>颜色：白色 / 型号：2342ASM</span>
                   <span>版本：2018增强版</span>
                </div>
                <div className="price"><span className="red">￥260.00</span><span>x 1</span></div>
            </div>
        </div>
    );
};
OrderInfo = withRouter(OrderInfo);

//产品详情底部
let Foot = (props)=> {
    return (
        <div className="foot">
            <div className="subBtn bule">提交申请</div>
            <div className="subBtn green">填写退货信息</div>
        </div>
    );
};
Foot = withRouter(Foot);

//售后选项
let AfterSaleInput = (props)=> {
    return (
        <div className="afterSaleInput">
            <div className="BtnList">
                <div><span>仅退款</span></div>
                <div><span>退货退款</span></div>
            </div>
            <div className="selReason">
                <span>宝贝评价（9635）</span>
                <span className="selinput">
                    <select >
                        <option value="1">产品与描述不符，存在欺骗行为</option>
                        <option value="2">买错了</option>
                        <option value="3">尺码不对</option>
                    </select>
                    <i className="icon iconfont icon-nvxingfuben" />
                </span>
            </div>
            <div className="imglist">
                <img src="./img/2.png" />
                <img src="./img/2.png" />
                <img src="./img/2.png" />
                <img src="./img/2.png" />
                <span className="imglistbtn">
                    <i className="icon iconfont icon-camera" />
                    <span>凭证</span>
                </span>
            </div>
            <div className="describe describelist">
                <div className="li">
                    <div className="title">你的描述</div>
                    <div className="text">
                        宝贝和描述不一样
                    </div>
                </div>
                <div className="li status warning">
                    卖家拒绝了您的申请
                </div>
                <div className="li status success">
                    卖家同意了您的申请
                </div>
                <div className="li">
                    <div className="title">爱上门旗舰店</div>
                    <div className="text">
                        请选择退货退款
                    </div>
                </div>
            </div>
            <div className="describe">
                <div className="title">你的描述</div>
                <div className="text">
                    <textarea placeholder="请输入你的描述"></textarea>
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
        };
    } 

    render() {
        return (
            <div className="aftersalePage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <OrderInfo />
                <AfterSaleInput />
                <Foot />
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
