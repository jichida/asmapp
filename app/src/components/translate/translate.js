//咨询页面组件

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import InfinitePage from '../../controls/listview';
import { getTranslateList } from '../../actions/sagacallback';
import "./translate.css";

let usecachemytopic = false;

class TopicInfo extends React.Component {
    render(){
        const {iteminfo, poppush} = this.props;
        return (
            <div className="li" onClick={()=>{poppush("/translate/info/1")}}>
                <div className="userinfo">
                    <div className="left">
                        <img className="avatar" src="./img/2.png" />
                    </div>
                    <div className="right">
                        <div className="name">会飞的鱼</div>
                        <div className="equipment">智能手表 2018-11-02 14:29:30</div>
                    </div>
                </div>
                <div>
                    <div className="imglist">
                        <img src="./img/2.png" />
                        <img src="./img/2.png" />
                        <img src="./img/2.png" />
                        <img src="./img/2.png" />
                    </div>
                    <div className="infotext">
                        智能穿戴设备是应用穿戴式技术对日常穿戴进行智能化设计、开发出可以穿戴的设备的总称，如手表、手环、眼镜、服饰等......
                    </div>
                </div>
                <div className="attribute">
                    <span>评论</span>
                    <span>点赞</span>
                    <span>收藏</span>
                    <span>举报</span>
                    <span>屏蔽</span>
                </div>
            </div>
        );
    }
}

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {}
    }
    componentDidMount(){
        usecachemytopic = false;
    }
    poppush(url){
        this.props.history.push(url);
    }
    rowRenderer = (item)=> {
        return (
            <TopicInfo
                dispatch={this.props.dispatch}
                key={item._id}
                onClick={()=>{this.poppush(`/translate/info/${item._id}`)}}
                iteminfo={item}
                />
        );

    }
    render() {
        return (
            <div className="translate">
                <div className="head">
                    <div className="leftlnk"><span className="city">常州 <i className="icon iconfont icon-down" /></span></div>
                    <div className="title">咨询</div>
                    <div className="rightlnk"><span className="addPost" onClick={()=>{this.poppush('/translate/add')}}>+ 发帖</span></div>
                </div>
                <div className="body">
                    <img src="./img/1.png" className="img" />

                    <div className="nav">
                        <div className="sel">全部帖子</div>
                        <div>智能家居</div>
                        <div>智能家电</div>
                        <div>健康穿戴</div>
                    </div>

                    <InfinitePage
                        usecache={usecachemytopic}
                        listtypeid='mytopics'
                        pagenumber = {20}
                        updateContent= {this.rowRenderer}
                        queryfun= { getTranslateList }
                        listheight={100}
                        sort = {{created_at: -1}}
                        query = {{}}
                    />

                    <div className="li" onClick={()=>{this.poppush("/translate/info/1")}}>
                        <div className="userinfo">
                            <div className="left">
                                <img className="avatar" src="./img/2.png" />
                            </div>
                            <div className="right">
                                <div className="name">会飞的鱼</div>
                                <div className="equipment">智能手表 2018-11-02 14:29:30</div>
                            </div>
                        </div>
                        <div>
                            <div className="imglist">
                                <img src="./img/2.png" />
                                <img src="./img/2.png" />
                                <img src="./img/2.png" />
                                <img src="./img/2.png" />
                            </div>
                            <div className="infotext">
                                智能穿戴设备是应用穿戴式技术对日常穿戴进行智能化设计、开发出可以穿戴的设备的总称，如手表、手环、眼镜、服饰等......
                            </div>
                        </div>
                        <div className="attribute">
                            <span>评论</span>
                            <span>点赞</span>
                            <span>收藏</span>
                            <span>举报</span>
                            <span>屏蔽</span>
                        </div>
                    </div>
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
