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
            isUsing : false,
            usetime : 0,
            userr : false
        };
    }
    back(){
        this.props.history.goBack();
    }
    poppush(url){
        this.props.history.push(url);
    }
    startUse(){
        this.setState({
            isUsing : true,
            userr : false,
            usetime : 0
        });
        window.setInterval(()=>{
            this.setState({ usetime : this.state.usetime+1 });
            if(this.state.usetime>10){
                this.setState({ userr : true });
            }
        }, 1000)
    }
    render() {
        return (
            <div className="adddevicePage devicePage usedevicePage" style={{height: window.innerHeight+"px"}}>
                <div className="devicehead usedevicehead">
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                    <div className="title">智能</div>
                    <div className="rightlnk" onClick={()=>{this.poppush("/device/setting")}}><span>设置</span></div>
                </div>
                <div className="step">
                    {
                        this.state.isUsing && !this.state.userr?
                        <div className="usedeviceinfo">
                            <div className="img usingimg">
                                <img src="../img/usedeviceloading.png" style={{width: "220px"}} />
                                <div className="usetime"><span>测量中</span><span><span>{this.state.usetime}</span>s</span></div>
                            </div>
                            <div className="colorLnk">卡住了</div>
                        </div>:""
                    }
                    {
                        !this.state.isUsing && !this.state.userr?
                        <div className="usedeviceinfo">
                            <div className="img">
                                <img src="../img/zz-3.png" style={{width: "70%"}} />
                                <span>请上称</span>
                            </div>
                            <div className="nextbtn" onClick={()=>{this.startUse()}} >开始测量</div>
                        </div>:""
                    }
                    {
                        this.state.userr?
                        <div className="usedeviceinfo">
                            <div className="img usingimg">
                                <i className="icon iconfont icon-chaping warning" style={{fontSize: "240px"}} />
                                <span>发生了一些小问题</span>
                            </div>
                            <div className="colorLnk" onClick={()=>{this.startUse()}}>再测一次</div>
                        </div>:""
                    }
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
