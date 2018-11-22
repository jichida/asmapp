//咨询详情页面

import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label } from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
import { ImagePicker } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./translate.css";

const data = [{
    url : 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id : '2121',
},];

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {
            files : data
        };
    } 
    poppush =(url)=>{
        this.props.history.push(url);
    }
    back = ()=>{
        this.props.history.goBack();
    }
    imgOnChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    textareafouce=()=>{
        let fromtextarea = this.refs.fromtextarea;
        fromtextarea.focus();
    }
    render() {
        const { files } = this.state;
        return (
            <div className="translate" style={{height: window.innerHeight+"px"}}>
                <div className="head">
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                    <div className="title">发布新帖</div>
                </div>
                <div className="body addTranslate">
                    <div className="addTranslateInfo">
                        <div className="userinfo">
                            <div className="left">
                                <img className="avatar" src="./img/2.png" />
                            </div>
                            <div className="right">
                                <div className="name">会飞的鱼</div>
                                <div className="equipment">智能手表 2018-09-09 09:20:20</div>
                            </div>
                        </div>
                        <div className="proinfo" onClick={()=>{this.poppush("/translate/selorder")}}>
                            <span className="shopping"><i className="icon iconfont icon-shopping" style={{color:"#0070c0"}} /></span>
                            <span className="proname">您购买的相关产品/服务</span>
                            <span className="selicon"><i className="icon iconfont icon-nvxingfuben" /></span>
                        </div>
                        <div className="inputarea">
                            <textarea placeholder="请输入您的内容..." ref="fromtextarea"></textarea>
                        </div>
                        <ImagePicker
                            files={files}
                            onChange={this.imgOnChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 7}
                            multiple={this.state.multiple}
                        />
                        <div className="subbtn">确认发布</div>
                    </div>
                </div>
                <div className="footools reply addTranslateInfoFoot">
                    <span onClick={this.textareafouce}><i className="icon iconfont icon-jianpan" style={{fontSize:"34px"}} /><i className="icon iconfont icon-nvxingfuben" /></span>
                    
                </div>
            </div>
        )
    }

}
const stores = ({userlogin}) => {

    return {...userlogin}; 
}
Page = withRouter(Page);
Page = connect(stores)(Page);
export default Page;
