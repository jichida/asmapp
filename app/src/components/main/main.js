import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./main.css";

//顶部搜索
let HeadStarch = (props)=> {
    return (
        <div className="mainHead">
            <div className="city">常州 <i className="icon iconfont icon-down" /></div>
            <div className="seatch"><input type="text" /><i className="icon iconfont icon-sousuo" /></div>
            <div className="more"><i className="icon iconfont icon-gengduo-tianchong moreLnk" /></div>
        </div>
    );
};

//首页滚动图片
let MainSrcollImg = (props)=> {
    return (
        <div className="scrollImg">
            <img src="./img/1.png" />
        </div>
    );
};

let Nav =(props)=>{
    return (
        <div className="nav">
            <span className="sel">全部商品</span>
            <span>智能家居</span>
            <span>智能家电</span>
            <span>健康穿戴</span>
        </div>
    )
}

//首页数据
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
        this.state = {
            p: 0,
            innerHeight : window.innerHeight
        };
    } 

    render() {
        return (
            <div className="mainPage">
                <HeadStarch />
                <div className="body">
                    <MainSrcollImg />
                    <Nav />
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
