//订单列表

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./search.css";

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
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">搜索</div>
        </div>
    );
};
Head = withRouter(Head);

//顶部搜索
let Nodata = (props)=> {

    return (
        <div className="Nodata">
            <div>
                <div className="tit">最近搜索</div>
                <div><span>智能血糖仪</span><span>智能血糖仪</span><span>智能血糖仪</span></div>
            </div>
            <div>
                <div className="tit">热门搜索</div>
                <div><span>智能血糖仪</span><span>智能血糖仪</span><span>智能血糖仪</span></div>
            </div>
        </div>
    );
};

//顶部搜索
let SearchInput = (props)=> {

    return (
        <div className="searchInput">
            <input type="text" placeholder="维修电脑" />
            <i className="icon iconfont icon-sousuo" />
        </div>
    );
};

let DataList = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    return (
        <div className="datalist">
            <div className="list">
                <div className="li" onClick={()=>{poppush("/good/1")}}>
                    <div className="img"><img src="./img/2.png" /></div>
                    <div className="inf">
                        <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                        <p><span className="price">￥260</span>
                        <span className="num">3345人已经购买</span></p>
                    </div>
                </div>
                <div className="li">
                    <div className="img"><img src="./img/2.png" /></div>
                    <div className="inf">
                        <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                        <p><span className="price">￥260</span>
                        <span className="num">3345人已经购买</span></p>
                    </div>
                </div>
                <div className="li">
                    <div className="img"><img src="./img/2.png" /></div>
                    <div className="inf">
                        <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                        <p><span className="price">￥260</span>
                        <span className="num">3345人已经购买</span></p>
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
        this.state = {};
    } 

    render() {
        return (
            <div className="searchPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <SearchInput />
                <Nodata />
                <div className="body">
                    <DataList />
                </div>
            </div>
        )
    }
}
const stores = ({userlogin}) => {
    const searchData = {
        name : "智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈003",
        price : 360,
        point : 3600,
        purchase : 100,
        imgurl : "./img/2.png",
        id: "TERT23424323fw"
    }
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
