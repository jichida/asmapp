import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./orderinfo.css";

//顶部搜索
let Head = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">待发货</div>
        </div>
    );
};
Head = withRouter(Head);

//顶部搜索
let Address = (props)=> {
    return (
        <div className="address">

            <i className="icon iconfont icon-buoumaotubiao23" />
            <div className="i">
                <div className="text">
                   <span>收货人: 李小四</span>
                   <span>19200000000</span>
                </div>
                <div className="addressinfo">
                    收货地址: 常州市武进区科教城天润科技大厦A307
                </div>
            </div>
            <i className="icon iconfont icon-xiangyou" />
            <div className='bg' style={{backgroundImage: "url('./img/line.png')"}}></div>
        </div>
    );
};

//快递信息
let ExpressInfo = (props)=> {
    return (
        <div className="expressinfo">
            <div className="address">
                <div className="info">
                    <i className="icon iconfont icon-buoumaotubiao23" />
                    <div className="i">
                        <div className="addressinfo">
                            收货地址: 常州市武进区科教城天润科技大厦A307
                        </div>
                    </div>
                </div>
                <div className="expresslist">
                    <div className="li now">包裹已经被签收，签收人：蜂巢快递柜</div>
                    <div className="li">派件中，快递员：王小五，联系电话：18088888888</div>
                    <div className="li">快件到达常州科教城，正在联系派件中...</div>
                </div>
                <div className='bg' style={{backgroundImage: "url('./img/line.png')"}}></div>
            </div>
        </div>
    );
};

//顶部搜索
let OrderInfo = (props)=> {
    return (
        <div className="orderinfobox">
            <div className="orderinfo">
                <div className="title">爱上门旗舰店</div>
                <div className="pli">
                    <div className="img"><img src="./img/2.png" /></div>
                    <div className="orderinfo">
                        <div className="name">爱上门新款血压仪送长辈十分有面子</div>
                        <div className="info"><p>颜色：黑色 / 型号 ：235ASM</p><p>版本：加强版</p></div>
                        <div className="price"><span className="pic red">￥ 250.00</span><span className="num">X 1</span></div>
                    </div>

                </div>
                <div className="canshu">
                    <div className="li">
                        <div>配送方式</div>
                        <div>快递 包邮</div>
                    </div>
                    <div className="li">
                        <div>使用红包</div>
                        <div>新人50元红包</div>
                    </div>
                    <div className="li">
                        <div>买家留言</div>
                        <div>快递不要放门卫！！！</div>
                    </div>
                    <div className="li">
                        <div>实付款(含运费)</div>
                        <div className="red">￥90.00</div>
                    </div>        
                </div>
            </div>
            <div className="orderinfo">
                <div className="title bold">订单信息</div>
                <div className="canshu">
                    <div className="li">
                        <div>订单编号</div>
                        <div>201888023742834</div>
                    </div>
                    <div className="li">
                        <div>付款方式</div>
                        <div>支付宝</div>
                    </div>
                    <div className="li">
                        <div>创建时间</div>
                        <div>2018-09-09 12:09:09</div>
                    </div>
                    <div className="li">
                        <div>付款时间</div>
                        <div>2018-09-09 12:09:09</div>
                    </div>
                    <div className="lnk">
                        <div><i className="icon iconfont icon-xinxi1" /><span>联系卖家</span></div>
                        <div><i className="icon iconfont icon-dianhuazhengzaibohao" /><span>拨打电话</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


//产品详情底部
let Foot = (props)=> {
    return (
        <div className="orderInfoFoot">
            <div className="sublnk sublnk1">
                <span>退货</span>
            </div>
            <div className="sublnk sublnk2">
                <div>提醒发货</div>
            </div>
            <div className="sublnk sublnk2">
                <div>申请售后</div>
            </div>
        </div>
    );
};

export class Page extends React.Component {

    constructor(props) {  
        super(props);  
        this.state = {};
    } 

    render() {
        return (
            <div className="orderInfoPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <div className="body">
                    <Address />
                    <ExpressInfo />
                    <OrderInfo />
                </div>
                <Foot />
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
