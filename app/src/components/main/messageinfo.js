//消息详情页面

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./messageinfo.css";

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
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i class="icon iconfont icon-Left" /></span></div>
            <div className="title">爱上门旗舰店</div>
        </div>
    );
};
Head = withRouter(Head);

let DataList = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    return (
        <div className="datalist">
            <div className="list">
                <div className="li">
                    <div className="img"><img src="./img/2.png" /></div>
                    <div className="inf">
                        <p><span className="name">爱上门3号客服</span><span className="time">2018/09/09</span></p>
                        <span className="text">这已经是最优惠的了，给您包邮怎么样</span>
                    </div>
                </div>
                <div className="li">
                    <div className="img"><img src="./img/2.png" /></div>
                    <div className="inf">
                        <p><span className="name">爱上门3号客服</span><span className="time">2018/09/09</span></p>
                        <span className="text">这已经是最优惠的了，给您包邮怎么样</span>
                    </div>
                </div>
                <div className="li">
                    <div className="img"><img src="./img/2.png" /></div>
                    <div className="inf">
                        <p><span className="name">爱上门3号客服</span><span className="time">2018/09/09</span></p>
                        <span className="text">这已经是最优惠的了，给您包邮怎么样</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
DataList = withRouter(DataList);

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {
            p: 0,
            innerHeight : window.innerHeight
        };
    } 
    render() {
        return (
            <div className="messageInfoPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <div className="body">
                    <DataList />
                </div>
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
