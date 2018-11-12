import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./good.css";

//顶部搜索
let GoodsImg = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="goodsinfoHead">
            <div className="goodImg">
                <a className="backLnk"><i class="icon iconfont icon-Left" onClick={back} /></a>
                <a className="shoppingcar"><i class="icon iconfont icon-gouwuche" /></a>
                <a className="moreLnk"><i class="icon iconfont icon-gengduo-tianchong" /></a>
                <img src="./img/1.png" />
            </div>
            <div className="data">
                <div className="nn">
                    <div className="left">
                        <span className="price">￥260.00 - 500.00</span>
                        <span className="name">爱上门血压仪</span>
                    </div>
                    <div className="right">
                        <span className="shear"><i class="icon iconfont icon-fenxiang"/> 分享</span>
                    </div>
                </div>
                <div className="nm">
                    <span>快递：20.00元</span>
                    <span>月销：23243件</span>
                    <span>常州</span>
                </div>
            </div>
        </div>
    );
};
GoodsImg = withRouter(GoodsImg);
//产品详情底部
let GoodsFoot = (props)=> {
    return (
        <div className="goodsFoot">
            <div className="leftlnk">
                <div><i class="icon iconfont icon-dianpu" /><span>店铺</span></div>
                <div><i class="icon iconfont icon-kefu" /><span>客服</span></div>
                <div><i class="icon iconfont icon-shoucang1" /><span>收藏</span></div>
            </div>
            <div className="sublnk">
                <div>加入购物车</div>
                <div>立刻购买</div>
            </div>
        </div>
    );
};
//产品选项组
let GoodsBtnList = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    return (
        <div className="goodsBtnList">
            <div onClick={()=>{poppush("/goodinfo/canshu")}}><span>参数</span><i class="icon iconfont icon-xiangyou" /></div>
            <div onClick={()=>{poppush("/goodinfo/sel")}}><span>选择</span><i class="icon iconfont icon-xiangyou" /></div>
        </div>
    );
};
GoodsBtnList = withRouter(GoodsBtnList);

//评价列表
let PingjiaList = (props)=> {
    return (
        <div className="pingjialist">
            <div className="pingjiahead">
                <span>宝贝评价（9635）</span>
                <span className="moreLnk">查看全部</span>
            </div>
            <div className="list">
                <div className="li">
                    <div className="name"><img src="./img/2.png" /><span>会飞的鱼</span></div>
                    <div className="text"><span>快递很给力，已经是第五次在这里购买了，每次都是当天下单，第二天上午 就能收到货，这款机器我用的十分开心。五星好评！</span></div>
                    <div className="img"><img src="./img/2.png" /><img src="./img/2.png" /><img src="./img/2.png" /></div>
                </div>
            </div>
        </div>
    );
};

//产品图文详情
let GoodText = (props)=> {
    return (
        <div className="goodText">
            <div className="goodTextHead">
                <span>爱上门旗舰店</span>
                <span className="lnk">查看店铺</span>
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
            <div className="goodInfoPage" style={{height: window.innerHeight+"px"}}>
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
