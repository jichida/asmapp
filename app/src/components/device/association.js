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
            <div className="associationPage">
                <div className="head">
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                    <div className="title">智能体脂称账户关联</div>
                </div>
                <div className="nav">
                    <span className="sel">主账户</span>
                    <span>张三丰</span>
                </div>
                <div className="body">
                    <div className="datalist">
                        <div className="li">
                            <div>老爸</div>
                            <div><span>李小四</span><i className="icon iconfont icon-delete2" /></div>
                        </div>
                        <div className="btn"><span>添加账号</span></div>
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
