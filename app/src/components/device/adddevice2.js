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
        this.state = {};
    }
    back(){
        this.props.history.goBack();
    }
    poppush(url){
        this.props.history.push(url);
    }
    render() {
        return (
            <div className="adddevicePage  devicePage devicebg" style={{height: window.innerHeight+"px"}}>
                <div className="devicehead">
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                    <div className="title">智能</div>
                </div>
                <div className="step">
                    <div className="img">
                        <img src="../img/adddevice2.png" />
                    </div>
                    <div className="stepname">
                        <span className="name">第二步</span>
                        <span className="stepnum">(2/3)</span>
                        <span className="text">请在手机上点击"开始绑定"进行连接<br/>该过程可能持续1分钟</span>
                    </div>
                    <div className="nextbtn" onClick={()=>{this.poppush("/device/add3")}}>开始绑定</div>
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