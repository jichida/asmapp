//我的红包

import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./wealthdetails.css";

//顶部搜索
let Head = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">我的红包</div>
        </div>
    );
};
Head = withRouter(Head);

let Nav = (props)=> {
    return (
        <div className="nav">
            <span className="sel">全部红包</span>
            <span>可用红包</span>
            <span>无效红包</span>
            <span>已用红包</span>
        </div>
    );
};
Head = withRouter(Head);

//首页数据
let Datalist = (props)=> {
    return (
        <div className="rewardslist">
            <div className="li">
                <div className="num">
                    <div className="n">
                        <span className="l1">￥ 200.00</span>
                        <span className="l2">未使用</span>
                    </div>
                </div>
                <div className="rol">
                    <span className="l1">仅限购买爱上门旗舰店商品</span>
                    <span className="l2">有效期: 2018-11-30</span>
                </div>
            </div>
            <div className="li off">
                <div className="num">
                    <div className="n">
                        <span className="l1">￥ 200.00</span>
                        <span className="l2">失效</span>
                    </div>
                </div>
                <div className="rol">
                    <span className="l1">仅限购买爱上门旗舰店商品</span>
                    <span className="l2">有效期: 2018-11-30</span>
                </div>
            </div>
            <div className="li off">
                <div className="num">
                    <div className="n">
                        <span className="l1">￥ 200.00</span>
                        <span className="l2">已使用</span>
                    </div>
                    <div className="orderinfo">订单编号:12423534626</div>
                </div>
                
                <div className="rol">
                    <span className="l1">仅限购买爱上门旗舰店商品</span>
                    <span className="l2">有效期: 2018-11-30</span>
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
            <div className="billPage" style={{height: window.innerHeight+"px"}}>
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
