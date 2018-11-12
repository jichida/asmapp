//订单列表

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./express.css";

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
            <div className="datahead">
                <div className="left">
                    <img src="./img/2.png" />
                </div>
                <div className="right">
                    <div><span>物流状态：</span><span>派件中</span></div>
                    <div><span>承运公司：</span><span>中通快递</span></div>
                    <div><span>运单单号：</span><span>23423553636345</span></div>
                    <div><span>官方电话：</span><span>400-1234-12312</span></div>
                </div>
            </div>
            <div className="expressPerson">
                <div className="avatar"><img src="./img/2.png" /></div>
                <div className="person"><span>快递员：赵小刘</span><span>123142554</span></div>
                <div className="i"><i class="icon iconfont icon-dianhuazhengzaibohao" /></div>
            </div>
            <div className="datali">
                <div className='bg' style={{backgroundImage: "url('./img/line.png')"}}></div>
                <div className="nowi i">
                    <div className="day"></div>
                    <div className="point">收</div>
                    <div className="info">收货地址：常州武进区科教城天润科技大厦A307</div>
                </div>

                <div className="i">
                    <div className="day">
                        <span>09-09</span>
                        <span>15:35</span>
                    </div>
                    <div className="point"></div>
                    <div className="info">派送中，快递员：周星驰，联系电话：18088888888</div>
                </div>
                <div className="i">
                    <div className="day">
                        <span>09-09</span>
                        <span>15:35</span>
                    </div>
                    <div className="point"></div>
                    <div className="info">派送中，快递员：周星驰，联系电话：18088888888</div>
                </div>
                <div className="i">
                    <div className="day">
                        <span>09-09</span>
                        <span>15:35</span>
                    </div>
                    <div className="point"></div>
                    <div className="info">派送中，快递员：周星驰，联系电话：18088888888</div>
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
            <div className="expressInfoPage" style={{height: window.innerHeight+"px"}}>
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
