import React from 'react';
import { Input,  Button, Icon,Label} from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
import {sendauth_request,register_request} from '../../actions/index.js';
import Sendauth from './sendauth.js';
import {withRouter} from 'react-router-dom';
import "./login.css";

let renderRegisterForm = (fields)=> {
    let ispasswordvisiable = fields.ispasswordvisiable.input.value;
    if (typeof ispasswordvisiable === 'string') {
        ispasswordvisiable = true;
    }

    let onChangePasswordvisiable = (event)=> {
        let newvalue = !ispasswordvisiable;
        fields.ispasswordvisiable.input.onChange(newvalue);
    }

    //发送
    let onClickAuth = (callback)=> {
        const name = fields.username.input.value;
        const phone =  !!name && !(name.match(/\D/g)||name.length !== 11||!name.match(/^1/));
        console.log(phone);
        if(phone){
            fields.dispatch(sendauth_request({username: name,reason:'register'}));
        }
        callback(phone);
    }

    //服务条款
    let showsrever =()=>{
        console.log(fields);
        fields.history.push('/aboutus/servicerule');
    }

    return (<div className='loginform'>
        <div className="username logininput">
            <Input placeholder='输入手机号' {...fields.username.input} type="text"/>
            {fields.username.meta.touched && fields.username.meta.error &&
            <Label basic color='red' pointing>{fields.username.meta.error}</Label>}
            <Icon name="mobile" className='lefticon' />
        </div>
        <div className="password logininput yanzhenyinput">
            <Input placeholder='输入验证码'  {...fields.authcode.input} type="text"/>
            {fields.authcode.meta.touched && fields.authcode.meta.error &&
            <Label basic color='red' pointing>{fields.authcode.meta.error}</Label>}
            <img src="img/rg2.png" className='lefticon' alt="" />
            <Sendauth primary action={onClickAuth} className="yanzhenBtn" />
        </div>
        <div className="password logininput">
            <Input placeholder='输入密码'  {...fields.password.input} type={ispasswordvisiable?"text":"password"}/>
            {fields.password.meta.touched && fields.password.meta.error &&
            <Label basic color='red' pointing>{fields.password.meta.error}</Label>}
            <img src="img/rg3.png" className='lefticon' alt="" />
            <img className="eye" src={ispasswordvisiable?"img/eye.png":"img/eye2.png"} onClick={onChangePasswordvisiable} alt=""/>
        </div>
        <div className="password logininput">
            <Input placeholder='重复输入密码'  {...fields.password2.input} type="text" />
            {fields.password2.meta.touched && fields.password2.meta.error &&
            <Label basic color='red' pointing>{fields.password2.meta.error}</Label>}
            <img src="img/rg4.png" className='lefticon' alt="" />
        </div>

        <div style={{paddingLeft:"6%", display:"none"}} className="logininput">
            <label className="weui-agree">
                <input className="weui-agree__checkbox" {...fields.aggree.input} type="checkbox" />
                <span className="weui-agree__text">
                    &nbsp;&nbsp;同意爱上门的
                </span>
            </label>
            《<a onClick={showsrever}>服务条款</a>》
            {fields.aggree.meta.touched && fields.aggree.meta.error &&
            <Label basic color='red' pointing><span style={{
                border:"1px solid #C00",
                borderRadius: "20px",
                display:"block",
                width : "14px",
                height : "14px",
                lineHeight: "14px",
                textAlign: "center"
            }}>{fields.aggree.meta.error}</span></Label>}
        </div>
    </div>);
}
renderRegisterForm = connect()(renderRegisterForm);
renderRegisterForm = withRouter(renderRegisterForm);


export class RegisterForm extends React.Component {
    render(){
        let {onClickRegister,handleSubmit,onClickLogin} = this.props;
        return (
            <Form
                id="UserLoginPageForm"
                className="UserLoginPageForm"
                onSubmit={handleSubmit(onClickRegister)}
                >
            <div className="loginPageTop">
                <Fields names={['username','ispasswordvisiable','authcode','password','password2','aggree']} component={renderRegisterForm}/>
                <div className="loginBotton">
                    <Button primary>注册</Button>
                    <Button basic type="button" style={{display:"none"}} onClick={onClickLogin}>快速登录</Button>
                </div>
            </div>
        </Form>);
    }
};


const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = '必填项';
    }
    else {
        let phone = values.username;
        phone = phone.replace(/\s/g, '');
        if (phone.match(/\D/g) || phone.length !== 11 || !phone.match(/^1/)) {
            errors.username = '无效手机号';
        }
    }

    if (!values.authcode) {
        errors.authcode = '必填项';
    }
    else {
        let authcode = values.authcode;
        authcode = authcode.replace(/\s/g, '');
        if (authcode.match(/\D/g) || authcode.length !== 4) {
            errors.authcode = '四位数字';
        }
    }

    if (!values.password) {
        errors.password = '必填项'
    }
    else {
        let psd = values.password;
        if (psd.match(/\s/g)) {
            errors.password = '不能含有空格';
        }
        else if (psd.length < 6) {
            errors.password = '密码至少六位';
        }
        else if (psd.length > 16) {
            errors.password = '密码太长';
        }
    }

    if(values.password !== values.password2){
      errors.password = '两次输入密码必须相同';
    }


    return errors;
}

RegisterForm = reduxForm({
    form: 'register',
    validate,
    initialValues: {
        username: '',
        password: '',
        password2:'',
        authcode: '',
        aggree: false,
        ispasswordvisiable: false,
    }
})(RegisterForm);


// let resizetime2 = null;
export class Page extends React.Component {

    constructor(props) {  
        super(props);  
        this.state = {
            innerHeight : window.innerHeight
        };
    }

    onClickReturn =()=>{
        this.props.history.goBack();
    }
    onClickRegister = (values)=> {
        console.dir(values);

        let payload = {
            username: values.username,
            password: values.password,
            authcode: values.authcode,
            invitecode:values.invitecode
        }
        this.props.dispatch(register_request(payload));
    }

    onClickLogin = ()=> {
        this.props.history.replace('/login');

    }

    back = ()=>{
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="UserLoginPage register" style={{minHeight : this.state.innerHeight + "px"}}>
                <div className="loginHead">
                    <span className="back" onClick={this.back}><i className="icon iconfont icon-Left" /></span>
                    <span className="title">新用户注册</span>
                </div>
                <img src="./img/bg.png" className="bg" alt=""/>
                <div className="loginPage">
                    <img src="./img/logo.png" className="logo" alt=""/>
                    <div className="logintext">欢迎使用爱上门平台，请先注册/登录</div>
                    <RegisterForm
                        onClickRegister={this.onClickRegister}
                        onClickLogin={this.onClickLogin}
                        onClickReturn={this.onClickReturn}
                        />
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({userlogin}) => {
    return {userlogin};
}
Page = connect(mapStateToProps)(Page);
export default Page;
