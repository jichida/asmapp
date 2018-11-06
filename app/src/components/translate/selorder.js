//咨询详情页面

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./translate.css";

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
            <div className="title">相关订单</div>
            <div className="rightlnk"><span className="search"><i className="icon iconfont icon-sousuo" /></span></div>
        </div>
    );
};
Head = withRouter(Head);
//首页数据
let Datalist = (props)=> {
    return (
        <div className="selOrderData">
            <div className="li">
                <div className="title">爱上门旗舰店</div>
                <div className="prolist">
                    <div className="pli sel">
                        <div className="rideoInput"></div>
                        <div className="img"><img src="./img/2.png" /></div>
                        <div className="orderinfo">
                            <div className="name">爱上门新款血压仪送长辈十分有面子新增测血压血糖新功能</div>
                            <div className="price">￥ 250.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="li">
                <div className="title">爱上门旗舰店</div>
                <div className="prolist">
                    <div className="pli">
                        <div className="rideoInput"></div>
                        <div className="img"><img src="./img/2.png" /></div>
                        <div className="orderinfo">
                            <div className="name">爱上门新款血压仪送长辈十分有面子新增测血压血糖新功能</div>
                            <div className="price">￥ 250.00</div>
                        </div>
                    </div>
                    <div className="pli">
                        <div className="rideoInput"></div>
                        <div className="img"><img src="./img/2.png" /></div>
                        <div className="orderinfo">
                            <div className="name">爱上门新款血压仪送长辈十分有面子新增测血压血糖新功能</div>
                            <div className="price">￥ 250.00</div>
                        </div>
                    </div>
                    <div className="pli">
                        <div className="rideoInput"></div>
                        <div className="img"><img src="./img/2.png" /></div>
                        <div className="orderinfo">
                            <div className="name">爱上门新款血压仪送长辈十分有面子新增测血压血糖新功能</div>
                            <div className="price">￥ 250.00</div>
                        </div>
                    </div>

                    <div className="pli">
                        <div className="rideoInput"></div>
                        <div className="img"><img src="./img/2.png" /></div>
                        <div className="orderinfo">
                            <div className="name">爱上门新款血压仪送长辈十分有面子新增测血压血糖新功能</div>
                            <div className="price">￥ 250.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

//底部回复控件
let FootTools = (props)=> {
    return (
        <div className="footools selOrderBtn">
            <span>确认选择</span>
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
            <div className="selOrderPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <div className="body">
                    <Datalist />
                </div>
                <FootTools />
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
