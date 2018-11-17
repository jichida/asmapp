import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon,Label} from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
// import {login_request} from '../../actions/index.js';
import { Modal, Toast } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import "./device.css";
const alert = Modal.alert;


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
    deldevice(){
        alert('接触绑定', '您确定要删除该设备吗？', [
          { text: '取消', onPress: () => console.log('cancel') },
          {
            text: '确定',
            onPress: () =>
              new Promise((resolve) => {
                Toast.info('接触绑定成功！', 1);
                setTimeout(resolve, 1500);
              }),
          },
        ])
    }
    render() {
        return (
            <div className="devicesettingPage" style={{height: window.innerHeight+"px"}}>
                <div className="head">
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                    <div className="title">智能</div>
                </div>
                <div className="body">
                    <br/>
                    <div className="datalist">
                        <div className="li" onClick={()=>{this.poppush("/device/historydata")}}><span>历史数据</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div className="li" onClick={()=>{this.poppush("/device/recommended")}}><span>推荐历史</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div className="li" onClick={()=>{this.poppush("/device/association")}}><span>账户关联</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div className="li"><span>ASM码兑换</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div className="li"><span>产品帮助</span><i className="icon iconfont icon-xiangyou" /></div>
                        <div className="li" onClick={()=>{this.deldevice()}}><span>解除绑定</span><i className="icon iconfont icon-xiangyou" /></div>
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
