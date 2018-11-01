/*
 * 产品详情
 * */
import React from 'react';
import {  Icon  } from 'semantic-ui-react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Swiper, Slide } from 'react-dynamic-swiper';
import '../../../node_modules/react-dynamic-swiper/lib/styles.css';
import '../../../public/css/shoppingproinfo.css';
import {
    uiaddcartdilog,
    uiiscollection,
    mycollectionaddone_request,
    mycollectiondelone_request,
    mycollectionisproductexits_request,
    set_productevaluatenumber,
    set_orderSurePage,
    set_weui,
    setsharesettingcur,
    share_data_updata,
 } from '../../actions';
 import Addcartdilog from './addcartdilog.js';
 import {
    productcommentsfromproductgetcount
} from '../../actions/sagacallback.js';
import config from '../../env/config.js';
import {setbackhandler,removebackhandler} from '../../env/android';

let swiperOptions = {
    navigation: false,
    pagination: true,
    scrollBar: false
};

export class Page extends React.Component {

    componentWillUnmount(){
        //清空弹窗数据
        this.props.dispatch(uiaddcartdilog({
            addcartdilogshow : false,
            addcartdilogproid : '',
            addcartdilogpronumber : 1,
            addcartdilogtype : "",
        }));
    }

    componentWillMount () {
        let sharesetting = {...this.props.sharesetting};
        sharesetting.url = `${config.serverurl}/app/#/shareprodinfo/${this.props.match.params.id}`;
        this.props.dispatch(setsharesettingcur(sharesetting));

        this.checkCollection();
        this.getEvaluate();
    };

    // showShare =()=>{
    //     this.props.dispatch(share_data_updata(true));
    // }

    //获取产品的评论条数
    getEvaluate =()=>{
        let proid = this.props.match.params.id;
        let proinfo = this.props.products[proid];
        //productcommentsfromproduct
        //evaluatenumber:set_productevaluatenumber
        let payload = {productid:proid};
        this.props.dispatch(productcommentsfromproductgetcount(payload)).then((result)=>{
            let count = result.count;
            let evaluatenumber = {
                evaluatenumber: count,
                proid : proid
            }
            this.props.dispatch(set_productevaluatenumber(evaluatenumber));
        });
    };
    //检测是否已经收藏
    checkCollection =()=>{
        let proid = this.props.match.params.id;
        let payload = {
            productid:proid,
        };
        this.props.dispatch(mycollectionisproductexits_request(payload));
    };
    onClickReturn = ()=> {
        this.props.history.goBack();
    };
    onClickPage = (name)=> {
        this.props.history.push(name);
    };
    //生成订单确认页
    setOrderSurePage =(proinfo)=>{
        if(typeof proinfo.pricenow === 'string'){
            proinfo.pricenow = parseFloat(proinfo.pricenow.toFixed(2));
        }
        let prolist = [{
            productid: proinfo._id,
            number:1,
            price:proinfo.pricenow,
            productinfo: proinfo
        }];
        let express = proinfo.pricenow>=this.props.expressfeeforfree?0:this.props.expressfee;
        let orderprice = proinfo.pricenow + express;
        let payload = {
            orderAddressId:'',//地址id
            orderProductsdetail:prolist,//产品列表
            orderExpress:express,//运费
            orderPrice:orderprice,//订单价格
            orderProductPrice : proinfo.pricenow, //产品总价格
        }
        this.props.dispatch(set_orderSurePage(payload));
        this.props.history.push("/pay");
    }

    //点击加入收藏
    clickCollection =(pro)=>{
        if(this.props.loginsuccess){
            let issellection = this.props.iscollection[pro._id];
            if(issellection){
                this.delCollection(pro._id);
            }else{
                this.addCollection(pro._id);
            }
        }else{
            this.props.dispatch(set_weui({
                confirm : {
                    show : true,
                    title : "未登录",
                    text : "登录后才能使用该功能",
                    buttonsClose : ()=>{},
                    buttonsClick : ()=>{this.props.history.push("/login")}
                },
            }));
        }
    };

    //加入收藏
    addCollection =(product)=>{
        this.props.dispatch(mycollectionaddone_request({product}));
    };

    //删除收藏
    delCollection =(_id)=>{
        this.props.dispatch(mycollectiondelone_request({product:_id}));
    };

    //显示加入购物车弹框
    showaddcartdilog =(proid)=>{
        this.props.dispatch(uiaddcartdilog({
            addcartdilogshow : true,
            addcartdilogproid : proid,
            addcartdilogtype : "cart",
        }));
    };

    //显示直接购买弹框
    showshoppingdilog =(proid)=>{
        this.props.dispatch(uiaddcartdilog({
            addcartdilogshow : true,
            addcartdilogproid : proid,
            addcartdilogtype : "shop",
        }));
    };

    //分享产品
    showShare =()=>{
        let oldhandlerbackfn = setbackhandler(()=>{
          this.props.dispatch(share_data_updata(false));
          setbackhandler(oldhandlerbackfn);
        });
        this.props.dispatch(share_data_updata(true));
    }

    render(){
        let proid = this.props.match.params.id;
        let proinfo = this.props.products[proid];

        return (
            <div className="ProinfoPage">
                <div className="ProinfoPageHead">
                    <Icon name="angle left" onClick={()=>{this.onClickReturn()}} />
                    <span className="title">商品详情</span>
                    <span className="imgcont" onClick={()=>{this.onClickPage('/shoppingcart')}} >
                        <img src="img/shopping/11.png" alt=""/>
                        <span className={this.props.remoteRowCount === 0?"hide":""}>{this.props.remoteRowCount}</span>
                    </span>
                </div>
                <div className="PageContent" style={{height:(window.innerHeight-118)+"px"}}>
                    <div className="shoppingBanner"
                        style={{
                                minHeight: "200px",
                                overflow: "visible"
                        }}
                        >
                        <Swiper
                            swiperOptions={{slidesPerView: 'auto'}}
                            {...swiperOptions}>
                            {_.map(proinfo.picurls.length>0?proinfo.picurls:[proinfo.picurl], (piclist,index)=>{
                                return (
                                    <Slide
                                        key={index}
                                        className="Demo-swiper__slide">
                                        <img src={piclist} alt=""/>
                                    </Slide>
                                )
                            })}

                        </Swiper>
                    </div>
                    <div className="proinfoHead">
                        <div className="p1">
                            <div>
                                <span className="proname">{proinfo.name}</span>
                                <span className="p2">
                                    <span>¥{proinfo.pricenow}</span>
                                    <span>¥{proinfo.pricemarket}</span>
                                </span>
                            </div>
                            <span className="collectionLnk" onClick={()=>{this.clickCollection(proinfo)}}>
                                <img src={this.props.iscollection[proinfo._id]?"img/shopping/star2.png":"img/shopping/star.png"} alt=""/>
                                <span>收藏</span>
                            </span>
                            <span className="collectionLnk" onClick={()=>{this.showShare()}} style={{marginLeft:"10px"}}>
                                <img src="img/shopping/share.png" alt=""/>
                                <span>分享</span>
                            </span>
                        </div>
                    </div>
                    <div className="discountlist">
                        <div className="li" onClick={()=>{this.onClickPage(`/shoppingproevaluate/${proinfo._id}`)}} >
                            <span className="tt">
                                商品评论
                            </span>
                            <span className="btn">{proinfo.evaluatenumber} 条评论 <Icon name="angle right"/></span>
                        </div>
                    </div>
                    <div className="proinfoBody">
                        <div className="proinfoBodyHead">
                            商品详情
                        </div>
                        <div className="proinfoBodyBody">

                            {
                                proinfo.picurldetails.length>0
                                ?
                                _.map(proinfo.picurldetails, (picurl,index)=>{
                                    return (<img src={picurl} key={index} alt=""/>)
                                })
                                :
                                (<div style={{textAlign:"center",lineHeight:"50px",color:"#999999"}}>－暂无数据－</div>)
                            }

                        </div>
                    </div>

                </div>
                <div className="proinfoFoot">
                    <span onClick={()=>{this.showaddcartdilog(proinfo._id)}}><i>加入购物车</i></span>
                    <span onClick={()=>{this.showshoppingdilog(proinfo._id)}}><i>立刻购买</i></span>
                </div>
                <Addcartdilog
                    show={this.props.addcartdilogshow}
                    proid={this.props.addcartdilogproid}
                    number={this.props.addcartdilogpronumber}
                    type={this.props.addcartdilogtype}
                    />
            </div>
        )
    }
}

let mapStateToProps = ({shop,shopcart,app,order,userlogin:{loginsuccess}}) => {
    return {...shop,...shopcart,...app,...order,loginsuccess};
}

Page = connect(mapStateToProps)(Page);
export default Page;
