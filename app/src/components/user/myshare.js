//我的分享
import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { Modal, Button } from 'antd';
import "./wealth.css";

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
            <div className="title">我的分享</div>
        </div>
    );
};
Head = withRouter(Head);

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {
            p: 0,
            innerHeight : window.innerHeight,
            tixian: false,
        };
    } 
    tixian(tixian){
        this.setState({ tixian });
    }
    poppush(url){
        this.props.history.push(url);
    }
    render() {
        return (
            <div className="wealthPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <div className="body">
                    <div className="data">
                        <div className="datahead">
                            <div className="datainfo">
                                <div className="allnum">￥123124.00</div>
                                <div className="sharetext">你分享获得的佣金</div>
                            </div>
                        </div>
                        <div className="sharelist">
                            <div className="li" onClick={()=>{this.poppush('/user/commissionlist')}}>
                                <span>佣金明细</span>
                                <i className="icon iconfont icon-xiangyou" />
                            </div>
                            <div className="li" onClick={()=>{this.tixian(true)}}>
                                <span>申请提现</span>
                                <i className="icon iconfont icon-xiangyou" />
                            </div>
                            <div className="li" onClick={()=>{this.poppush('/user/shareextraction')}}>
                                <span>提现记录</span>
                                <i className="icon iconfont icon-xiangyou" />
                            </div>
                            <div className="li" onClick={()=>{this.poppush('/user/shareinstructions')}}>
                                <span>分享说明</span>
                                <i className="icon iconfont icon-xiangyou" />
                            </div>
                        </div>            
                    </div>
                </div>
                <Modal
                    title=""
                    centered
                    visible={this.state.tixian}
                    onOk={() => this.tixian(false)}
                    onCancel={() => this.tixian(false)}
                    wrapClassName="serviceLinebox"
                    >
                    <p style={{
                        width: (window.innerWidth * 0.75)+"px",
                        textAlign : "center",
                        padding: "20px 0px 40px 0",
                        fontSize: "20px",
                        fontWeight: "100"
                        }}>
                        您的提现申请已经提交<br/>请等待审核通过
                    </p>
                    <a className="phonelnk colorLnk" onClick={() => this.tixian(false)}>好的</a>
                </Modal>
            </div>
        )
    }
}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
