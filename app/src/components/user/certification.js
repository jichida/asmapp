//认证
import React from 'react';
// import '../../public/css/user.css';
// import { Input, Button, Icon, Label } from 'semantic-ui-react';
// import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
import { Upload, Icon, message } from 'antd';
// import {NavBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "./certification.css";


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

export class Page extends React.Component {
    constructor(props) {  
        super(props);  
        this.state = {
            p: 0,
            innerHeight : window.innerHeight,
        };
    }
    back(){
        this.props.history.goBack();
    }
    tixian(tixian){
        this.setState({ tixian });
    }
    poppush(url){
        this.props.history.push(url);
    }
    handleChange1(info){
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl1 => this.setState({
                imageUrl1,
                loading: false,
            }));
        }
    }
    render() {
        const imageUrl1 = this.state.imageUrl1;
        const imageUrl2 = this.state.imageUrl2;
        const uploadButton1 = (
            <div>
                <Icon type={'loading'} style={{display: this.state.loading?"block":"none"}} />
                <div className="li img" style={{display: this.state.loading?"none":"flex"}}><div>身份证正面照<br/>(头像一面)</div></div>
                <div className="ant-upload-text colorLnk">上传照片</div>
            </div>
        );
        const uploadButton2 = (
            <div>
                <Icon type={'loading'} style={{display: this.state.loading?"block":"none"}} />
                <div className="li img" style={{display: this.state.loading?"none":"flex"}}><div>身份证反面照<br/>(国徽一面)</div></div>
                <div className="ant-upload-text colorLnk">上传照片</div>
            </div>
        );
        return (
            <div className="certificationPage" style={{height: window.innerHeight+"px"}}>
                <div className="head">
                    <div className="leftlnk"><span className="back" onClick={()=>{this.back()}}><i className="icon iconfont icon-Left" /></span></div>
                    <div className="title">实名认证</div>
                </div>
                <div className="body">
                    <div className="formlist">
                        <div className="li">
                            <span>您的姓名:</span>
                            <input type="text" />
                        </div>
                        <div className="li">
                            <span>身份证号:</span>
                            <input type="text" />
                        </div>

                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange1}
                          >
                            {imageUrl1 ? <img src={imageUrl1} alt="avatar" /> : uploadButton1}
                        </Upload>

                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange2}
                          >
                            {imageUrl2 ? <img src={imageUrl2} alt="avatar" /> : uploadButton2}
                        </Upload>

                        <div className="formBtn">申请认证</div>          
                    </div>
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
