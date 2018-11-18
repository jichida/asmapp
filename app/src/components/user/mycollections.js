//我的收藏

import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./mycollections.css";

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {};
    }
    poppush(url){
        this.props.history.push(url);
    }
    back(){
        this.props.history.goBack();
    }
    //客服热线
    serviceLine(serviceLine) {
        console.log("serviceLine")
        this.setState({ serviceLine });
    }
    render() {
        return (
            <div className="mycollectionsPage" style={{height: window.innerHeight+"px"}}>
                <div className="head">
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                    <div className="title">我的收藏</div>
                </div>
                <div className="nav">
                    <span className="sel">全部商品</span>
                    <span>智能家居</span>
                    <span>智能家电</span>
                    <span>健康穿戴</span>
                </div>
                <div className="body">
                    <div className="datalist">
                        <div className="li" onClick={()=>{this.poppush("/good/1")}}>
                            <div className="img"><img src="./img/2.png" /></div>
                            <div className="inf">
                                <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                                <p><span className="price">￥260</span><span className="num">3345人已经购买</span></p>
                                <p><span className="store">爱上门旗舰店</span><span className="storelnk">进店 <i className="icon iconfont icon-xiangyou"/></span></p>
                            </div>
                        </div>
                        <div className="li">
                            <div className="img"><img src="./img/2.png" /></div>
                            <div className="inf">
                                <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                                <p><span className="price">￥260</span><span className="num">3345人已经购买</span></p>
                                <p><span className="store">爱上门旗舰店</span><span className="storelnk">进店 <i className="icon iconfont icon-xiangyou"/></span></p>
                            </div>
                        </div>
                        <div className="li">
                            <div className="img"><img src="./img/2.png" /></div>
                            <div className="inf">
                                <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                                <p><span className="price">￥260</span><span className="num">3345人已经购买</span></p>
                                <p><span className="store">爱上门旗舰店</span><span className="storelnk">进店 <i className="icon iconfont icon-xiangyou"/></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Page = withRouter(Page);
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
