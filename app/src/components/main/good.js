import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';


//顶部搜索
let GoodsImg = (props)=> {
    return (
        <div className="goodsinfoHead">
            <div className="goodImg">
                <a className="backLnk">返回</a>
                <a className="backLnk">购物车</a>
                <a className="backLnk">...</a>
                <div><br/><br/><br/></div>
            </div>
            <div className="data">
                <div>
                    <span>￥260.00 - 500.00</span>
                    <span>爱上门血压仪</span>
                    <span>快递：20.00元</span>
                </div>
                <div>
                    <span>分享</span>
                    <span>月销：23243件</span>
                </div>
            </div>
        </div>
    );
};
//产品详情底部
let GoodsFoot = (props)=> {
    return (
        <div className="goodsFoot">
            <div>
                <div>店铺</div>
                <div>客服</div>
                <div>收藏</div>
            </div>
            <div className="sublnk">
                <div>
                    加入购物车
                </div>
                <div>
                    立刻购买
                </div>
            </div>
        </div>
    );
};
//产品选项组
let GoodsBtnList = (props)=> {
    return (
        <div className="goodsBtnList">
            <div>参数</div>
            <div>选择</div>
        </div>
    );
};

//评价列表
let PingjiaList = (props)=> {
    return (
        <div className="pingjialist">
            <div className="head">
                <span>宝贝评价（9635）</span>
                <span>查看全部</span>
            </div>
            <div className="list">
                <div className="li">
                    <div><img src="" /><span>会飞的鱼</span></div>
                    <div><span>快递很给力，已经是第五次在这里购买了，每次都是当天下单，第二天上午 就能收到货，这款机器我用的十分开心。五星好评！</span></div>
                    <div><img src="" /><img src="" /><img src="" /></div>\
                </div>
            </div>
        </div>
    );
};

//产品图文详情
let GoodText = (props)=> {
    return (
        <div className="goodText">
            <div className="head">
                <span>爱上门旗舰店</span>
                <span>查看店铺</span>
            </div>
            <div className="text">
                产品图文详情
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
            <div className="mainPage">
                <GoodsImg />
                <GoodsBtnList />
                <PingjiaList />
                <GoodText />
                <GoodsFoot />
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
