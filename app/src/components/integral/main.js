import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./main.css";

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
    } 
    poppush(url){
        this.props.history.push(url);
    }
    render() {
        return (
            <div className="mainPage">
                <div className="mainHead">
                    <div className="city" onClick={()=>{this.poppush("/setlocation")}}>常州 <i className="icon iconfont icon-down" /></div>
                    <div className="seatch"><input type="text" onClick={()=>{this.poppush("/search")}} /><i className="icon iconfont icon-sousuo" /></div>
                    <div className="more"><i className="icon iconfont icon-gengduo-tianchong moreLnk" /></div>
                </div>
                <div className="body">
                    <div className="scrollImg">
                        <img src="./img/1.png" />
                    </div>
                    <div className="nav">
                        <span className="sel">全部商品</span>
                        <span>智能家居</span>
                        <span>智能家电</span>
                        <span>健康穿戴</span>
                    </div>
                    <div className="datalist">
                        <div className="list">
                            <div className="li" onClick={()=>{this.poppush("/good/1")}}>
                                <div className="img"><img src="./img/2.png" /></div>
                                <div className="inf">
                                    <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                                    <p>
                                        <span className="price">积分：2600</span>
                                    </p>
                                    <p>
                                        <span className="num">3345人已经购买</span>
                                    </p>
                                </div>
                            </div>
                            <div className="li">
                                <div className="img">
                                    <img src="./img/2.png" />
                                </div>
                                <div className="inf">
                                    <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                                    <p>
                                        <span className="price">积分：2600</span>
                                        <span className="price">现金：￥260</span>
                                    </p>
                                    <p>
                                        <span className="num">3345人已经购买</span>
                                    </p>
                                </div>
                            </div>
                            <div className="li">
                                <div className="img"><img src="./img/2.png" /></div>
                                <div className="inf">
                                    <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                                    <p>
                                        <span className="price">积分：2600</span>
                                        <span className="price">现金：￥260</span>
                                    </p>
                                    <p>
                                        <span className="num">3345人已经购买</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

const stores = ({userlogin}) => { return {...userlogin}; }
Page = withRouter(Page);
Page = connect(stores)(Page);
export default Page;



