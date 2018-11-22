import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { Carousel } from 'antd-mobile';
import lodashmap from "lodash.map";
import "./main.css";

export class Page extends React.Component {
    constructor(props) {  
        super(props); 
        this.state = {
            NavData : this.props.NavData,
            showloading : false,//是否显示加载中块
            showfiexdnav : false,//是否显示固定导航条
        }
    } 
    poppush(url){
        this.props.history.push(url);
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
        // this.setState({ NavData : this.props.NavData })
        // console.log(this.refs.mainbody);
        let MainBody = this.refs.mainbody;
        let MainSlideimg = this.refs.slideimg;
        MainBody.addEventListener('scroll', ()=>{
            //监听滚动到底部加载更多数据
            // console.log(MainBody.scrollHeight);
            // console.log();
            // console.log(MainBody.scrollTop)
            if((MainBody.scrollHeight- (MainBody.clientHeight + MainBody.scrollTop))<2){
                this.showloading();
            }
            //监听滚动到一定距离后，固定导航条
            // console.log(MainSlideimg.offsetHeight);
            // console.log(MainBody.scrollTop);
            if(MainBody.scrollTop>=MainSlideimg.offsetHeight){
                this.showfiexdnav(true);
            }else{
                this.showfiexdnav(false);
            }
            
        });
    }
    componentWillReceiveProps(nextProps) {
        //
    }

    showfiexdnav(h){
        this.setState({ showfiexdnav : h });
    }

    showloading(){//显示loading，加载更多数据
        let addobj = {
            name : "智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈003",
            price : 360,
            point : 3600,
            purchase : 100,
            imgurl : "./img/2.png",
            id: "TERT23424323fw"
        }
        this.setState({ showloading : true });
        this.refs.mainbody.scrollTop = this.refs.mainbody.scrollHeight;
        setTimeout(()=>{
            //添加数据
            for(let i=0;i<5;i++){
                this.props.MainDataList.push(addobj)
            }
            this.setState({ showloading : false });
        }, 2000)
    }

    render() {
        const {TopImgList, MainDataList, NavData} = this.props;
        return (
            <div className="mainPage">
                <div className="mainHead">
                    <div className="city" onClick={()=>{this.poppush("/setlocation")}}>常州 <i className="icon iconfont icon-down" /></div>
                    <div className="seatch"><input type="text" onClick={()=>{this.poppush("/search")}} /><i className="icon iconfont icon-sousuo" /></div>
                    <div className="more"><i className="icon iconfont icon-gengduo-tianchong moreLnk" /></div>
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
                                    <span className={ !!val.sel?"sel":"" } key={index} onClick={()=>{this.seltype(index)}}>{val.name}</span>
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
                                        <span className={ !!val.sel?"sel":"" } key={index} onClick={()=>{this.seltype(index)}}>{val.name}</span>
                                    )
                                }
                            )
                        }</div>
                    }

                    <div className="datalist">
                        <div className="list" >
                            {
                                lodashmap(MainDataList ,(val, index) => {
                                        return (
                                            <div className="li" key={index} onClick={()=>{this.poppush(`/good/${val.id}`)}}>
                                                <div className="img"><img src={val.imgurl} /></div>
                                                <div className="inf">
                                                    <span className="name">{val.name}</span>
                                                    <p><span className="price">￥{val.price}</span>
                                                    <span className="num">{val.purchase}人已经购买</span></p>
                                                </div>
                                            </div>    
                                        )
                                    }
                                )
                            }
                            { !!this.state.showloading && <div className="showloading">loading ...</div> }
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

const stores = ({userlogin}) => {
    //顶部滚动图片数据
    let TopImgList = [
        {url : "./img/1.png"},
        {url : "./img/1.png"},
        {url : "./img/1.png"},
    ];
    let NavData = [
        { name:"全部商品",sel: true},
        { name:"智能家居",sel: false},
        { name:"智能家电",sel: false},
        { name:"健康穿戴",sel: false}
    ]
    let MainDataList = [
        {
            name : "智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈001",
            price : 450,
            point : 4500,
            purchase : 300,
            imgurl : "./img/2.png",
            id: "qwdq23423323f"
        },
        {
            name : "智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈002",
            price : 360,
            point : 3600,
            purchase : 100,
            imgurl : "./img/2.png",
            id: "TERT23424323f"
        },
        {
            name : "智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈003",
            price : 360,
            point : 3600,
            purchase : 100,
            imgurl : "./img/2.png",
            id: "TERT23424323fw"
        },
        {
            name : "智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈003",
            price : 360,
            point : 3600,
            purchase : 100,
            imgurl : "./img/2.png",
            id: "TERT23424323fw"
        },
        {
            name : "智能体脂秤【现货发售】爱上门旗舰店双十一活动大回馈003",
            price : 360,
            point : 3600,
            purchase : 100,
            imgurl : "./img/2.png",
            id: "TERT23424323fw"
        }
    ]
    return {...userlogin, TopImgList, NavData, MainDataList};
}
Page = withRouter(Page);
Page = connect(stores)(Page);
export default Page;



