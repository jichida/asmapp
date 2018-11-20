//订单列表

import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import lodashmap from "lodash.map";
import CITY from '../../util/city.json';
import "./setlocation.css";

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {
            nowCity : this.props.nowCity,
            arealist : this.props.arealist,
        };
    }
    poppush(url){
        this.props.history.push(url);
    }
    back(){
        this.props.history.goBack();
    }
    selcity(name){
        console.log(name)
        this.setState({nowCity : name })
    }

    render() {
        return (
            <div className="selLocationPage" style={{height: window.innerHeight+"px"}}>
                <div className="head">
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                    <div className="title">定位</div>
                </div>
                <div className="nowlocation">
                    <div><span>当前定位：</span><span>{this.state.nowCity}</span></div>
                    <div className="selbtn"><span>选择区域</span><i className="icon iconfont icon-down" /></div>
                </div>
                <div className="data">
                    <div className="datahead">
                        
                        <div className="headlist">
                            <div className="headli">
                                <div className="tit">最近定位</div>
                                <div className="li">
                                    <div><span>上海</span></div>
                                    <div><span>常州</span></div>
                                </div>
                            </div>
                            <div className="headli">
                                <div className="tit">热门城市</div>
                                <div className="li">
                                    {
                                        lodashmap(CITY.hotcity, (val, i)=>{
                                            return (
                                                <div key={i} onClick={()=>{this.selcity(val.name)}}><span>{val.name}</span></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        {
                            lodashmap(CITY.citylist, (val, i)=>{
                                return (
                                    <div>
                                        <div className="tt">{val.initial}</div>
                                        <div className="li">
                                            {
                                                lodashmap(val.list, (city, ii)=>{
                                                    return (
                                                        <span key={ii} onClick={()=>{this.selcity(city.name)}}>{city.name}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}
const stores = ({userlogin}) => {

    let provinces = CITY.provinces;
    let arealib = {};
    lodashmap(provinces, (citylist, i)=>{
        let city = citylist.city;
        lodashmap(city, (citys, ii)=>{
            arealib[citys.name] = citys.area
        })
    })
    let nowCity = "常州";
    return {...userlogin, nowCity};
}
Page = withRouter(Page);
Page = connect(stores)(Page);
export default Page;
