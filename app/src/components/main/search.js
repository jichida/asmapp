//订单列表

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import InfinitePage from '../../controls/listview';
import { getTranslateList } from '../../actions/sagacallback';
import { SearchBar } from 'antd-mobile';
// import lodashmap from "lodash.map";
import "./search.css";

let usecachemytopic = false;

class TopicInfo extends React.Component {
    render(){
        const {iteminfo, poppush} = this.props;
        return (
            <div className="li" onClick={()=>{this.poppush("/good/1")}}>
                <div className="img"><img src="./img/2.png" /></div>
                <div className="inf">
                    <span className="name">智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈下单再减100元</span>
                    <p><span className="price">￥260</span>
                    <span className="num">3345人已经购买</span></p>
                </div>
            </div>
        );
    }
}


export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {
            searchkey : ""
        };
    }
    poppush =(url)=>{
        this.props.history.push(url);
    }
    componentDidMount(){
        usecachemytopic = false;
        this.autoFocusInst.focus();
    }
    back = ()=>{
        this.props.history.goBack();
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
    onChange=(value)=>{
        console.log(value);
        this.setState({searchkey : value});
    }
    render() {
        return (
            <div className="searchPage" style={{height: window.innerHeight+"px"}}>
                <div className="head">
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                    <div className="title">搜索</div>
                </div>
                <div className="searchInput">
                    <SearchBar placeholder="Search" maxLength={8} onChange={this.onChange} ref={ref => this.autoFocusInst = ref} />
                </div>
                <div className="Nodata">
                    <div>
                        <div className="tit">最近搜索</div>
                        <div><span>智能血糖仪</span><span>智能血糖仪</span><span>智能血糖仪</span></div>
                    </div>
                    <div>
                        <div className="tit">热门搜索</div>
                        <div><span>智能血糖仪</span><span>智能血糖仪</span><span>智能血糖仪</span></div>
                    </div>
                </div>
                <div className="body">
                    <div className="datalist">
                        <div className="list">
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
            </div>
        )
    }
}
const stores = ({userlogin}) => {
    const searchData = {
        name : "智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈003",
        price : 360,
        point : 3600,
        purchase : 100,
        imgurl : "./img/2.png",
        id: "TERT23424323fw"
    }
    return {...userlogin};
}
Page = connect(stores)(Page);
export default Page;
