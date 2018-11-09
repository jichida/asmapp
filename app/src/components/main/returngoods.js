import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./returngoods.css";

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
            <div className="title">请退货</div>
        </div>
    );
};
Head = withRouter(Head);

//顶部搜索
let Address = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="address">
            <div className="title">请将商品寄到以下地点</div>
            <div className="text">
               <span>收货人: 李小四</span>
               <span>19200000000</span>
            </div>
            <div className="addressinfo">
                收货地址: 常州市武进区科教城天润科技大厦A307
            </div>
            <div className='bg' style={{backgroundImage: "url('./img/line.png')"}}></div>
        </div>
    );
};
Address = withRouter(Address);

let Express = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="express">
            <div className="title">
                <span>填写快递信息</span>
                <span className="chickExpress">查看物流</span>
            </div>
            <div className="info">
                <div className="i"><span>寄 件 人 ：</span><span><input type="text" /></span></div>
                <div className="i"><span>联系电话：</span><span><input type="text" /></span></div>
                <div className="i"><span>快递公司：</span><span><select><option className="yunda">韵达快递</option></select></span></div>
                <div className="i"><span>快递单号：</span><span><input type="text" /></span></div>
            </div>
        </div>
    );
};
Express = withRouter(Express);

//产品详情底部
let Foot = (props)=> {
    return (
        <div className="foot">
            <div>确定提交</div>
        </div>
    );
};
Foot = withRouter(Foot);

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
            <div className="returngoodsPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <div className="body">
                    <Address />
                    <Express />
                </div>
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
