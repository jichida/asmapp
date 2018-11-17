import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon,Label} from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
// import {NavBar} from 'antd-mobile';
// import {login_request} from '../../actions/index.js';
import { DatePicker, List } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import "./device.css";


function formatDate(date){
    let newYear = date.getFullYear();
    let newMonth = date.getMonth()+1;
    let newDate = date.getDate();
    return newYear + "-" + newMonth + "-" + newMonth;
}

export class Page extends React.Component {

    constructor(props) {  
        super(props); 
        this.state = {};
    }

    back(){
        this.props.history.goBack();
    }

    poppush(url){
        this.props.history.push(url);
    }

    render() {
        let Optional = formatDate(new Date());
        return (
            <div className="devicehistorydataPage" style={{height: window.innerHeight + "px"}}>
                <div className="head">
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                    <div className="title">智能体脂称历史数据</div>
                </div>
                <div className="nav">
                    <span>从</span>
                    <DatePicker
                        mode="date"
                        title="选择开始时间"
                        extra="请选择日期"
                        value={this.state.startdate}
                        onChange={(startdate)=>{
                            this.setState({ startdate });
                        }}
                    >
                      <List.Item arrow="horizontal">Date</List.Item>
                    </DatePicker>
                    <span>到</span>
                    <DatePicker
                        mode="date"
                        title="选择结束时间"
                        extra="请选择日期"
                        value={this.state.endtdate}
                        onChange={(endtdate)=>{
                            this.setState({ endtdate });
                        }}
                    >
                      <List.Item arrow="horizontal">Date</List.Item>
                    </DatePicker>
                    
                    <div className="search"><i className="icon iconfont icon-sousuo" /></div>
                </div>
                <div className="datatable">
                    <img src="../img/zz-5.png" style={{width: "100%"}} />
                </div>
                
            </div>
        );
    }

}
const mapStateToProps = ({userlogin}) => {
    return {...userlogin};
}
Page = withRouter(Page);
Page = connect(mapStateToProps)(Page);
export default Page;
