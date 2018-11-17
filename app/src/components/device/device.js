import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon,Label} from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
// import {login_request} from '../../actions/index.js';
import {withRouter} from 'react-router-dom';
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
            <div className="devicePage devicebg">
                <div className="devicehead">
                    <div className="title">智能</div>
                </div>
                <div className="imgscroll">
                    <img src="../img/1.png" />
                </div>
                { 
                    !this.state.hasdevice
                    ?
                    <div>
                        <div className="adddevicebtn" onClick={()=>{this.poppush("/device/add1")}}><span><i className="icon iconfont icon-jiahao" /></span></div>
                        <div className="nodevicetext">您还没有设备呢!<br/>点击添加一个吧!</div>
                    </div>
                    :
                    <div className="devicelist">
                        <div className="li">
                            <div className="l" onClick={()=>{this.poppush("/device/use")}}>
                                <span className="name">智能体脂称</span>
                                <span className="color9">状态：正常</span>
                            </div>
                            <div className="r">
                                <span className="value warning">肥胖</span>
                                <span className="color9">上次测量</span>
                                <span className="color9">10-20 12:20</span>
                            </div>
                        </div>
                        <div className="li">
                            <div className="l">
                                <span className="name">智能体脂称</span>
                                <span className="color9">状态：正常</span>
                            </div>
                            <div className="r">
                                <span className="value warning">肥胖</span>
                                <span className="color9">上次测量</span>
                                <span className="color9">10-20 12:20</span>
                            </div>
                        </div>
                    </div>
                }
                
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
