//订单列表

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./store.css";

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

//首页数据
let Datalist = (props)=> {
    return (
        <div className="data">
            <div className="imgscroll">
                <div className="li">
                    <img src="./img/1.png" />
                </div>
            </div>
            <div className="datali">
                <div><span>掌柜名称:</span><span>爱上门旗舰店</span></div>
                <div><span>店铺地址:</span><span>常州市武进区科教城人民路123号</span></div>
                <div><span>联系电话:</span><span>0519-83458987</span></div>
                <div><span>营业时间:</span><span>09:00:00-22:00:00</span></div>
                <div><span>工商资质:</span><span className="lnk">查看</span></div>
                <div><span>开店时间:</span><span>2010-01-01 13:00:00</span></div>
            </div>
        </div>
    );
};

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
            <div className="storePage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <Datalist />
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
