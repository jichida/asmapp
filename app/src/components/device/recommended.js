import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon,Label} from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
// import {login_request} from '../../actions/index.js';
import { withRouter } from 'react-router-dom';
import { Rate } from 'antd';
import "./device.css";

export class Page extends React.Component {

    constructor(props) {  
        super(props);  
        this.state = {
            hasdevice : false
        };
    }

    back(){
        this.props.history.goBack();
    }

    poppush(url){
        this.props.history.push(url);
    }

    render() {
        return (
            <div className="devicePage recommendedPage" style={{height: window.innerHeight+"px"}}>
                <div className="head">
                    <div className="title">智能体脂称推荐历史</div>
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                </div>
                <div className="body">
                    <div className="datalist">
                        <div className="li">
                            <div className="t">推荐日期:2018-10-31 12:12:02</div>
                            <div className="info">
                                <div className="l">
                                    <img src="../img/zz-4.png" />
                                </div>
                                <div className="r">
                                    <div className="tt">
                                        <span>10节瘦身课程</span>
                                        <span className="red">￥980</span>
                                    </div>
                                    <div className="cc">这里是课程详情这里是课程详情这里是课程详情这里是课</div>
                                    <div className="store">
                                        <span>爱上门旗舰店</span>
                                        <span>好评率: 90%</span>
                                    </div>
                                    <div className="address">
                                        <i className="icon iconfont icon-buoumaotubiao23" />
                                        <span>常州武进区科教城创研巷2#301</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="li">
                            <div className="t">推荐日期:2018-10-31 12:12:02</div>
                            <div className="info">
                                <div className="l">
                                    <img src="../img/zz-4.png" />
                                </div>
                                <div className="r">
                                    <div className="tt">
                                        <span>10节瘦身课程</span>
                                        <span className="red">￥980</span>
                                    </div>
                                    <div className="cc">这里是课程详情这里是课程详情这里是课程详情这里是课</div>
                                    <div className="store">
                                        <span>爱上门旗舰店</span>
                                        <span>好评率: 90%</span>
                                    </div>
                                    <Rate allowHalf defaultValue={2.5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
const mapStateToProps = ({userlogin}) => {
    return {...userlogin};
}
Page = withRouter(Page);
Page = connect(mapStateToProps)(Page);
export default Page;
