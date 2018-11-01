/*
 * 购物车
 * */
import React, { Component } from 'react';
// import {NavBar} from 'antd-mobile';
import { connect } from 'react-redux';
import { Input,  Checkbox,  Icon } from 'semantic-ui-react';
import './shoppingcart.css';
import { mycartgetall } from '../../actions/sagacallback.js';
import InfinitePage from '../controls/listview';
import Swipeout from 'rc-swipeout';
import {
  mycartupdateone,
  mycartdelone,
} from '../../actions/sagacallback.js';
import {
    uiinfinitepage_deleteitem,
    uiinfinitepage_updateitem,
    ui_cartooder_additem,
    ui_cartooder_updateitem,
    ui_cartooder_delitem,
    ui_cart_selectallitems,
    set_orderSurePage,
    // getaddresslist_request,
    set_weui,
    set_cartslist,
    del_cartslist,
    ui_viewshoppingproinfo
} from '../../actions';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

export class Cartitem extends Component {

//     constructor(props) {  
//         super(props);  
//         this.state = {searchStr: ''};  
//         this.handleChange = this.handleChange.bind(this); 
//     } 

    //获取我的地址列表
    componentWillMount() {
        // let payload = {
        //     query: {},
        //     options: {
        //         page: 1,
        //         limit: 1000,
        //     }
        // };
        // this.props.dispatch(getaddresslist_request(payload));
    }

    render(){
        console.log('Cartitem renderCaritem==>' + JSON.stringify(this.props));
        let {item,products,isselected,dispatch,history} = this.props;
        let cartid = item._id;
        let changeproductnumber = (number)=>{
            let payload = {
                _id:cartid,
                data:{
                    product:item.product,
                    number
                }
            };
            dispatch(mycartupdateone(payload)).then((result)=>{
                console.log('mycartupdateone result:' + JSON.stringify(result));
                if(result){
                    dispatch(uiinfinitepage_updateitem(result.updateditem));
                    dispatch(ui_cartooder_updateitem(result.updateditem));
                }
            });

        }
        let onChangeNumber=(e)=>{
            let number = e.target.value;
            if(number > 0){
                changeproductnumber(number);
            }
        }
        let onChangeNumberPlus=(e, value)=>{
            let event = e || window.event;
            event.stopPropagation();
            let number = item.number;
            number = number + value;
            if(number > 0){
                changeproductnumber(number);
            }
        }
        let onClickDeleteItem =()=>{
            let payload = {
                _id:cartid,
            };
            dispatch(mycartdelone(payload)).then((result)=>{
                    console.log('mycartdelone result:' + JSON.stringify(result));
                    if(result){
                        dispatch(uiinfinitepage_deleteitem(result));
                        dispatch(ui_cartooder_delitem(item));
                        dispatch(del_cartslist(item));
                    }
            });

        }
        let onClickChecktedItem = ()=>{
            if(isselected){
                dispatch(ui_cartooder_delitem(item));
            }
            else{
                dispatch(ui_cartooder_additem(item));
            }
        }

        let onClickChecktedItemImg=(e)=>{
            let event = e || window.event;
            event.stopPropagation();
            // history.push(`shoppingproinfo/${item.product}`);
            this.props.dispatch(ui_viewshoppingproinfo(item.product));
        }

        let proinfo = products[item.product];
        if(proinfo){
            return (
            <Swipeout autoClose={true}
                right={[{
                    text: '删除',
                    style: { backgroundColor: 'red', color: 'white', fontSize: "16px" },
                    onPress:onClickDeleteItem
                }]}
                >
                <div className="li" >
                    <Checkbox
                        onClick={onClickChecktedItem}
                        checked={isselected}
                        />
                    <div className="l">
                        <img src={proinfo.picurl} onClick={(e)=>{onClickChecktedItemImg(e);}} alt=""/>
                        <div>
                            <span>{proinfo.name}</span>
                            <div className="price">
                                <span>¥{proinfo.pricenow}</span>
                                <div className="btnControl">
                                    <div className="del" onClick={(e)=>{onChangeNumberPlus(e,-1);}}>-</div>
                                    <div className="num">
                                        <Input name="firstName" type="text" value={item.number} onChange={onChangeNumber}/>
                                    </div>
                                    <div className="add" onClick={(e)=>{onChangeNumberPlus(e,1);}}>+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Swipeout>);
        }
        return (<div>{item.product}产品不存在!</div>);
    }
}

let mapStateToPropsCartItem = ({shop:{products},shopcart:{toordercarts}},props) => {
    let isselected = toordercarts.hasOwnProperty(props.item._id);
    return {products,isselected};
}
Cartitem = connect(mapStateToPropsCartItem)(Cartitem);
Cartitem = withRouter(Cartitem);


export class Pricetotal extends Component {

    createOrder =()=>{
        const {
            totalprice,
            isselected,
            dispatch,
            items,
            expressfee,
            expressfeeforfree,
            defaultaddress,
            history
        } = this.props;
        let prolist = this.props.toordercartsproducts;
        let express = totalprice>=expressfeeforfree?0:expressfee;
        let orderprice = totalprice + express;
        let orderAddressInfo = {};
        if(defaultaddress.hasOwnProperty("_id")){
            orderAddressInfo = defaultaddress;
        }
        let payload = {
            orderAddressId:'',//地址id
            orderProductsdetail:prolist,//产品列表
            orderExpress:express,//运费
            orderPrice:orderprice,//订单价格
            orderProductPrice : totalprice, //产品总价格
            orderAddressInfo : orderAddressInfo
        }
        if(prolist.length>0){
            dispatch(set_orderSurePage(payload));
            history.push("/pay");
        }else{
            let toast = {
                show : true,
                text : "请选择一个商品",
                type : "warning"
            }
            dispatch(set_weui({ toast }));
        }
    }

    render(){
        const {totalprice,isselected,dispatch,items} = this.props;
        let onClickCheckSelall = ()=>{
            dispatch(ui_cart_selectallitems({isselectedall:!isselected,items}));
        }

        return (
            <div>
                <div className="left">
                    <Checkbox checked={isselected}
                        onClick={onClickCheckSelall}
                        label='全选'
                    />
                    <div className="price">
                        合计: <span>¥{totalprice}</span>
                    </div>
                </div>
                <div className="btn" onClick={()=>{this.createOrder()}}>
                    <span>去结算</span>
                </div>
            </div>
        );
    }
}

let mapStateToPropsPricetotal = (
        {
            shop:{products},
            shopcart:{toordercarts,cartslist},
            //infinitepage:{items},
            app:{expressfee,expressfeeforfree},
            address:{addresslist},
            userlogin:{defaultaddress}
        }
    ) => {
        let items = cartslist;
        let totalprice = 0;
        let isselected = false;
        let itemsel = 0;
        let toordercartsproducts = [];
        _.map(toordercarts,(item,key)=>{
            let number = parseFloat(item.number);
            let price = parseFloat(products[item.product].pricenow);
            let priceitem = number*price;
            priceitem = parseFloat(priceitem.toFixed(2));
            totalprice += priceitem;
            itemsel++;
            let product = {
                productid: item.product,
                number: item.number,
                price: price,
                productinfo: products[item.product]
            }
            toordercartsproducts.push(product);
        });
        let itemslength = 0;
        _.map(items,(x,i)=>{
            itemslength++;
        })
        isselected = itemsel === itemslength;
        totalprice = parseFloat(totalprice.toFixed(2));
        return {totalprice,isselected,items,toordercarts,toordercartsproducts,expressfee,expressfeeforfree,defaultaddress}
}
Pricetotal = connect(mapStateToPropsPricetotal)(Pricetotal);
Pricetotal = withRouter(Pricetotal);



export class Cartlist extends Component {
    componentWillMount(){
        this.props.dispatch(mycartgetall({
            query:{},
            options:{limit:1000}
        })).then((result)=>{
            this.props.dispatch(set_cartslist({payload:result.result.docs}));
        })
    }
    render() {
        const {cartslist} = this.props;
        return (
            <div>
                {
                    _.map(cartslist, (item, index)=>{
                        return (
                            <div key={item._id}>
                                <Cartitem item={item} />
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
let dataCartlist = ({shopcart:{cartslist}}) => {
    return {cartslist};
}
Cartlist = connect(dataCartlist)(Cartlist);


export class Page extends Component {
    // shouldComponentUpdate(nextProps) {
    //       return false;
    // }



    render() {
      //注意：购物车不应该用分页

        let onClickReturn = ()=> {
            this.props.history.goBack();
        };

        let onClickPage = (name)=> {
            this.props.history.push(name);
        };

        return (
            <div className="shoppingCartPage"
                style={{
                    height:(window.innerHeight)+"px",
                }}
                >
                <div className="PageHead">
                    <Icon name="angle left" onClick={()=>{onClickReturn()}} />
                    <span className="title">购物车</span>
                </div>
                <div className="proinfo" style={{height:(window.innerHeight-118)+"px"}}>

                    <Cartlist />

                </div>
                <div className="footBtn">
                    <Pricetotal onClickPage={onClickPage}  />
                </div>
            </div>
        );

    }
}
Page = connect()(Page);
export default Page;
