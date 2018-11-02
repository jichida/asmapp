import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';


//顶部搜索
let HeadStarch = (props)=> {
    return (
        <div className="mainHead">
            <div className="city">常州</div>
            <div className="seatch"><input type="text" /></div>
            <div className="more">...</div>
        </div>
    );
};

//首页滚动图片
let MainSrcollImg = (props)=> {
    return (
        <div className="scrollImg">
            <br/>滚动图片<br/><br/>
        </div>
    );
};

//首页数据
let DataList = (props)=> {
    return (
        <div className="datalist">
            <div>
                <span>健康</span>
                <span>娱乐</span>
                <span>科技</span>
                <span>距离</span>
            </div>
            <div className="list">
                <div className="li">
                    <div><img src="" /></div>
                    <div>
                        <span>爱上门血压仪</span>
                        <span>￥260</span>
                        <span>3345人已经购买</span>
                    </div>
                    <div>收藏</div>
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
            <div className="mainPage">
                <HeadStarch />
                <MainSrcollImg />
                <DataList />
            </div>
        )
    }

}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
