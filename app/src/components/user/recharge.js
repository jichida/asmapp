//充值

import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./wealth.css";

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {
            p: 0,
            innerHeight : window.innerHeight
        };
    } 
    poppush(url){
        this.props.history.push(url);
    }
    back(){
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="wealthPage withdrawcashpage" style={{height: window.innerHeight+"px"}}>
                <div className="head">
                    <div className="leftlnk">
                        <span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span>
                    </div>
                    <div className="title">现金充值</div>
                </div>
                <div className="body">
                    <div className="data withdrawcashdata">
                        <div className="datahead" style={{marginBottom: "15px"}}>
                            <div className="datainfo">
                                <div className="allnum">123124.00</div>
                                <div className="sharetext">当前可提现(元)</div>
                                <div className="allnumowner">总现金: ￥234566.00</div>
                            </div>
                        </div>
                        <div className="datalist">
                            <div className="t">充值金额:</div>
                            <div className="i">￥<input type="number" /></div>
                            <div className="t">充值方式:</div>
                            <div className="s">
                                <div className="sel"><div><img src="../img/alipay.png" /></div><span>支付宝</span></div>
                                <div><div><img src="../img/wechat.png" /></div><span>微信</span></div>
                                <div><div><img src="../img/card.png" /></div><span>银行卡</span></div>
                            </div>
                            <br/>
                            <br/>
                            <div className="frombtn subbtn">确定充值</div>
                        </div>
                    </div>
                </div>
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
