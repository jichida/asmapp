//订单列表

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./setlocation.css";

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
            <div className="title">定位</div>
        </div>
    );
};
Head = withRouter(Head);

//首页数据
let Datalist = (props)=> {
    return (
        <div className="data">
            <div className="datahead">
                <div className="nowlocation">
                    <div><span>当前定位：</span><span>上海</span></div>
                    <div className="selbtn"><span>选择区域</span><i className="icon iconfont icon-down" /></div>
                </div>
                <div className="headlist">
                    <div className="headli">
                        <div className="tit">最近定位</div>
                        <div className="li">
                            <div className="sel"><span>上海</span></div>
                            <div><span>常州</span></div>
                        </div>
                    </div>
                    <div className="headli">
                        <div className="tit">热门城市</div>
                        <div className="li">
                            <div><span>上海</span></div>
                            <div><span>常州</span></div>
                            <div><span>南京</span></div>
                            <div><span>北京</span></div>
                            <div><span>上海</span></div>
                            <div><span>常州</span></div>
                            <div><span>上海</span></div>
                            <div><span>常州</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list">
                <div className="tt">A</div>
                <div className="li">
                    <span>鞍山</span>
                    <span>安庆</span>
                    <span>安阳</span>
                    <span>安康</span>
                </div>
                <div className="tt">B</div>
                <div className="li">
                    <span>鞍山</span>
                    <span>安庆</span>
                    <span>安阳</span>
                    <span>安康</span>
                </div>
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
            <div className="selLocationPage" style={{height: window.innerHeight+"px"}}>
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
