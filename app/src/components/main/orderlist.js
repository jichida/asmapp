//订单列表

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./orderlist.css";

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
            <div className="title">订单列表</div>
            <div className="rightlnk"><span className="search"><i className="icon iconfont icon-sousuo" /></span></div>
        </div>
    );
};
Head = withRouter(Head);

//顶部搜索
let Nav = (props)=> {

    return (
        <div className="nav">
            <span className="sel">全部</span>
            <span>待付款</span>
            <span>待发货</span>
            <span>待收货</span>
            <span>待评价</span>
            <span>售后</span>
        </div>
    );
};

//首页数据
let Datalist = (props)=> {
    return (
        <div className="orderListData">
            <div className="li">
                <div className="title">
                    <span className="shoppingname">爱上门旗舰店</span>
                    <span className="statusname"></span>
                </div>
                <div className="prolist">
                    <div className="pli">
                        <div className="img"><img src="./img/2.png" /></div>
                        <div className="orderinfo">
                            <div className="name">爱上门新款血压仪送长辈十分有面子新增测血压血糖新功能</div>
                            <div className="info"><p>颜色：黑色 / 型号 ：235ASM</p><p>版本：加强版</p></div>
                            <div className="price"><span className="pic red">￥ 250.00</span><span className="num">X 1</span></div>
                        </div>
                    </div>
                </div>
                <div className="sublnk">
                    <div className="l"><span>合计 ： <span className="red">￥ 250.00</span></span></div>
                    <div className="r"><span>取消订单</span><span style={{color:'#f39800'}}>去付款</span></div>
                </div>
            </div>
            <div className="li">
                <div className="title">
                    <span className="shoppingname">爱上门旗舰店</span>
                    <span className="statusname"></span>
                </div>
                <div className="prolist">
                    <div className="pli">
                        <div className="img"><img src="./img/2.png" /></div>
                        <div className="orderinfo">
                            <div className="name">爱上门新款血压仪送长辈十分有面子新增测血压血糖新功能</div>
                            <div className="info"><p>颜色：黑色 / 型号 ：235ASM</p><p>版本：加强版</p></div>
                            <div className="price"><span className="pic red">￥ 250.00</span><span className="num">X 1</span></div>
                        </div>
                    </div>
                </div>
                <div className="sublnk">
                    <div className="l"><span>合计 ： <span className="red">￥ 250.00</span></span></div>
                    <div className="r"><span>取消订单</span><span style={{color:'#f39800'}}>去付款</span></div>
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
            <div className="orderListPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <Nav />
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
