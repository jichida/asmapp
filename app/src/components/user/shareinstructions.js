//分享说明

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./shareinstructions.css";

//顶部
let Head = (props)=> {
    let back=()=>{
        props.history.goBack();
    }
    return (
        <div className="head">
            <div className="leftlnk"><span className="back" onClick={()=>{back()}}><i className="icon iconfont icon-Left" /></span></div>
            <div className="title">分享说明</div>
        </div>
    );
};
Head = withRouter(Head);

//首页数据
let Datalist = (props)=> {
    let poppush =(url)=>{
        props.history.push(url);
    }
    let exit =()=>{
        console.log("exit");
    }
    return (
        <div className="userCenterList">
            <p>爱上门（江苏）信息科技有限公司成立于2014年，是一家朝气蓬勃、发展迅 猛的互联网公司。爱上门是一款有效抓取服务人员的空闲时间，精准技能匹配，从 距离、专业性出发，采用悬赏、竞价模式，用户自我挑选出满意手艺人的需求速配 平台，始终围绕价格、工种、技能专业性、有无服务时间、距离5大特点，不断的进 行大数据分析，优化用户体验，实现产品价值。平台通过需求交易，将身边毫无关 系的陌生人由陌生走向认识，由弱关系逐步演化成强关系，把被动式服务转变成主 动服务。爱上门服务的品类主要包括丽人服务、婚礼庆典、生活家政、维修保养、 健康保健、教育培训、汽车服务、商务服务、餐饮服务。 爱上门的服务理念：专业的人做专业的事、价格实惠、敢于创新、把用户 的利益放在首位，及时响应用户的需求！</p>
            <p>爱上门（江苏）信息科技有限公司成立于2014年，是一家朝气蓬勃、发展迅 猛的互联网公司。爱上门是一款有效抓取服务人员的空闲时间，精准技能匹配，从 距离、专业性出发，采用悬赏、竞价模式，用户自我挑选出满意手艺人的需求速配 平台，始终围绕价格、工种、技能专业性、有无服务时间、距离5大特点，不断的进 行大数据分析，优化用户体验，实现产品价值。平台通过需求交易，将身边毫无关 系的陌生人由陌生走向认识，由弱关系逐步演化成强关系，把被动式服务转变成主 动服务。爱上门服务的品类主要包括丽人服务、婚礼庆典、生活家政、维修保养、 健康保健、教育培训、汽车服务、商务服务、餐饮服务。 爱上门的服务理念：专业的人做专业的事、价格实惠、敢于创新、把用户 的利益放在首位，及时响应用户的需求！</p>
        </div>
    );
};
Datalist = withRouter(Datalist);


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
            <div className="shareinstructionsPage" style={{height: window.innerHeight+"px"}}>
                <Head />
                <div className="body">
                    <Datalist />
                </div>
                <div className="foot"><span>成为分享者</span></div>
            </div>
        )
    }
}
const stores = ({userlogin}) => {
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
