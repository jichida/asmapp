//我的佣金记录
import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./commissionlist.css";

//顶部搜索
let Head = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">佣金记录</div>
        </div>
    );
};
Head = withRouter(Head);

//首页数据
let Datalist = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    return (
        <div className="data">
            <div className="datalist">
                <div className="li" onClick={()=>{poppush("/good/1")}}>
                    <div className="img"><img src="./img/2.png" alt="" /></div>
                    <div className="inf">
                        <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                        <div className="p">
                            <div className="l">
                                <span className="red">￥260</span>
                                <span>￥23.00 佣金</span>
                            </div>
                            <div className="r">
                                <span>购买者：会飞的鱼</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="li" onClick={()=>{poppush("/good/1")}}>
                    <div className="img"><img src="./img/2.png" alt="" /></div>
                    <div className="inf">
                        <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                        <div className="p">
                            <div className="l">
                                <span className="red">￥260</span>
                                <span>￥23.00 佣金</span>
                            </div>
                            <div className="r">
                                <span>购买者：会飞的鱼</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="li" onClick={()=>{poppush("/good/1")}}>
                    <div className="img"><img src="./img/2.png" alt="" /></div>
                    <div className="inf">
                        <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                        <div className="p">
                            <div className="l">
                                <span className="red">￥260</span>
                                <span>￥23.00 佣金</span>
                            </div>
                            <div className="r">
                                <span>购买者：会飞的鱼</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Datalist = withRouter(Datalist);



export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {};
    } 
    render() {
        return (
            <div className="commissionlistPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <div className="body">
                    <Datalist />
                </div>
            </div>
        )
    }
}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = withRouter(Page);
Page = connect(stores)(Page);
export default Page;
