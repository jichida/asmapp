//咨询页面组件

import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { Carousel } from 'antd-mobile';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import InfinitePage from '../../controls/listview';
import { getTranslateList } from '../../actions/sagacallback';
import lodashmap from "lodash.map";
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
        this.state = {
            NavData : this.props.NavData,
            showfiexdnav : false,//是否显示固定导航条
        }
    }
    seltype(i){
        let NavData = this.state.NavData
        lodashmap(NavData,(val,index)=>{
            val.sel = false;
        })
        NavData[i].sel = true;
        this.setState({  NavData });
    }
    componentDidMount(){
        usecachemytopic = false;
        let MainBody = this.refs.mainbody;
        let MainSlideimg = this.refs.slideimg;
        console.log(MainSlideimg.offsetHeight);
        console.log(MainBody.scrollTop);
        MainBody.addEventListener('scroll', ()=>{
            //监听滚动到一定距离后，固定导航条
            console.log(MainSlideimg.offsetHeight);
            console.log(MainBody.scrollTop);
            if(MainBody.scrollTop>=MainSlideimg.offsetHeight && MainBody.scrollTop!=0){
                this.showfiexdnav(true);
            }else{
                this.showfiexdnav(false);
            }
            
        });
    }
    showfiexdnav(h){
        this.setState({ showfiexdnav : h });
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
        const { TopImgList, NavData } = this.props;
        return (
            <div className="translate">
                <div className="head">
                    <div className="leftlnk"><span className="city">常州 <i className="icon iconfont icon-down" /></span></div>
                    <div className="title">咨询</div>
                    <div className="rightlnk"><span className="addPost" onClick={()=>{this.poppush('/translate/add')}}>+ 发帖</span></div>
                </div>
                <div className="body" ref="mainbody">
                    <div className="mainslideimg" ref="slideimg">
                        <Carousel
                            autoplay={false}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                          
                            >
                            {TopImgList.map(val => (
                                <a
                                    key={val}
                                    style={{ display: 'inline-block', width: '100%' }}
                                    >
                                        <img
                                            src={val.url}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top' }}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}
                                        />
                                </a>
                            ))}
                        </Carousel>
                    </div>
                    <div className="nav" ref="mainnav">
                    {
                        this.state.NavData.map(
                            (val, index) => {
                                return (
                                    <div className={ !!val.sel?"sel":"" } key={index} onClick={()=>{this.seltype(index)}}>{val.name}</div>
                                )
                            }
                        )
                    }
                    </div>
                    {
                        !!this.state.showfiexdnav && <div className="nav navfixed">{
                            this.state.NavData.map(
                                (val, index) => {
                                    return (
                                        <div className={ !!val.sel?"sel":"" } key={index} onClick={()=>{this.seltype(index)}}>{val.name}</div>
                                    )
                                }
                            )
                        }</div>
                    }
                    <div className="datalist">
                        <InfinitePage
                            usecache={usecachemytopic}
                            listtypeid='mytopics'
                            pagenumber = {20}
                            updateContent= {this.rowRenderer}
                            queryfun= { getTranslateList }
                            listheight={800}
                            sort = {{created_at: -1}}
                            query = {{}}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const stores = ({userlogin}) => {
    let NavData = [
        { name:"全部帖子",sel: true},
        { name:"智能家居",sel: false},
        { name:"智能家电",sel: false},
        { name:"健康穿戴",sel: false}
    ];
    let TopImgList = [
        {url : "./img/1.png"},
        {url : "./img/1.png"},
        {url : "./img/1.png"},
    ];
    return {...userlogin, NavData, TopImgList};
}
Page = connect(stores)(Page);
export default Page;
