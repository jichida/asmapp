import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { Carousel, List, Modal } from 'antd-mobile';
import lodashmap from "lodash.map";
import "./main.css";

export class Page extends React.Component {
    constructor(props) {  
        super(props); 
        this.state = {
            NavData : this.props.NavData,
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
        this.setState({ NavData });
    }
    componentDidMount(){
        // this.setState({ NavData : this.props.NavData })
    }
    componentWillReceiveProps(nextProps) {
        //
    }
    render() {
        const {TopImgList, MainDataList} = this.props;
        console.log("render");
        return (
            <div className="mainPage">
                <div className="mainHead">
                    <div className="city" onClick={()=>{this.poppush("/setlocation")}}>常州 <i className="icon iconfont icon-down" /></div>
                    <div className="seatch"><input type="text" onClick={()=>{this.poppush("/search")}} /><i className="icon iconfont icon-sousuo" /></div>
                    <div className="more"><i className="icon iconfont icon-gengduo-tianchong moreLnk" /></div>
                </div>
                <div className="body">
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
                    <div className="nav">
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
                    <div className="datalist">
                        <div className="list">
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
    ]
    return {...userlogin, TopImgList, NavData, MainDataList};
}
Page = withRouter(Page);
Page = connect(stores)(Page);
export default Page;



