//分享说明

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./shareinstructions.css";

//顶部
let Head = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">售后规则</div>
        </div>
    );
};
Head = withRouter(Head);

//首页数据
let Datalist = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    let exit =()=>{
        console.log("exit");
    }
    return (
        <div className="rulesinfo">
            <div>退换货办理流程相关操作说明<br/>
1.  每个商品只提供一次退换货服务，为了确保您的权益，请考虑周全后与我们联系。
2.  礼包或套装中的商品部分退换，我们将按优惠比例退还相应款项（如5折商品退货时也按5折比例退还）。
3. 如果该产品有附加的赠品，请将赠品一同退回，赠品需要保持收到赠品时的原质原样，如赠品不能退回，按照网上原售价格在退款中扣除。
4. 发生退货的订单所累积的积分，在退货时，11号店将扣除相应的积分哦，如积分已使用，需要以其他方式补回积分（电子红包、电子钱包等）。
5. 退货时需同时将发票退回，如发票不能退回，退款需扣除税金。</div></div>
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
            <div className="shareinstructionsPage" style={{height: window.innerHeight+"px"}}>
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
