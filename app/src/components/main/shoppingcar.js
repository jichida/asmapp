import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';

//顶部
let Head = (props)=> {
    return (
        <div className="shoppingcarhead">
            <span>返回</span>
            <span>购物车</span>
            <span>管理</span>
        </div>
    );
};
//底部
let Foot = (props)=> {
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
//数据
let Data = (props)=> {
    return (
        <div className="goodsBtnList">
            <div className="li">
                <div className="shopname">爱上门旗舰店</div>
                <div className="l">
                    <div>
                        <input type="rideo" />
                        <input type="rideo" />
                        <input type="rideo" />
                    </div>
                </div>
            </div>
            <div className="l">选择</div>
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
                <Head />
                <Foot />
                <Data />
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
