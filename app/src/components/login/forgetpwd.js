import React from 'react';
// import '../../public/css/user.css';
import { Input, Button, Icon, Label} from 'semantic-ui-react';
import { Fields, reduxForm,Form  } from 'redux-form';
import { connect } from 'react-redux';
import {sendauth_request,findpwd_request} from '../../actions/index.js';
// import {register} from '../actions/sagacallback.js';
import { NavBar } from 'antd-mobile';
import Sendauth from './sendauth.js';
import "./login.css";

let renderFindPwdForm = (fields)=> {
    console.dir(fields);
    let ispasswordvisiable = fields.ispasswordvisiable.input.value;
    if (typeof ispasswordvisiable === 'string') {
        ispasswordvisiable = true;
    }

    let onChangePasswordvisiable = (event)=> {
        let newvalue = !ispasswordvisiable;
        fields.ispasswordvisiable.input.onChange(newvalue);
    }

    let onClickAuth = (callback)=> {
        const name = fields.username.input.value;
        const phone =  !!name && !(name.match(/\D/g)||name.length !== 11||!name.match(/^1/));
        console.log(phone);
        if(phone){
            fields.dispatch(sendauth_request({username: name,reason:'findpwd'}));
        }
        callback(phone);
    }

    return (<div className='loginform'>
        <div className="username logininput">
            <Input placeholder='输入手机号' {...fields.username.input} type="text"/>
            {fields.username.meta.touched && fields.username.meta.error &&
            <Label basic color='red' pointing>{fields.username.meta.error}</Label>}
            <Icon name="mobile" className='lefticon'/>
        </div>
        <div className="password logininput yanzhenyinput">
            <Input placeholder='输入验证码'  {...fields.authcode.input} type="text"/>
            {fields.authcode.meta.touched && fields.authcode.meta.error &&
            <Label basic color='red' pointing>{fields.authcode.meta.error}</Label>}
            <Icon name="lock" className='lefticon'/>
            <Sendauth primary action={onClickAuth} className="yanzhenBtn" />
        </div>
        <div className="password logininput">
            <Input placeholder='请输入密码'  {...fields.password.input} type="password"/>
            {fields.password.meta.touched && fields.password.meta.error &&
            <Label basic color='red' pointing>{fields.password.meta.error}</Label>}
            <Icon name="lock" className='lefticon'/>
        </div>
        <div className="password logininput">
            <Input placeholder='请重复输入密码'  {...fields.passwordagain.input} type="password"/>
            {fields.password.meta.touched && fields.password.meta.error &&
            <Label basic color='red' pointing>{fields.password.meta.error}</Label>}
            <Icon name="lock" className='lefticon'/>
        </div>
    </div>);
}
renderFindPwdForm = connect()(renderFindPwdForm);

let FindpwdForm = (props)=> {
    let {handleSubmit,onClickOK,onClickReturn} = props;
    return (
        <Form onSubmit={handleSubmit(onClickOK)} className="UserLoginPageForm">
            <div className="loginPageTop">
                <Fields names={['username','ispasswordvisiable','password','authcode','passwordagain']} component={renderFindPwdForm}/>
                <div className="loginBotton">
                    <Button primary>确定</Button>
                </div>
            </div>
        </Form>
    );
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
    return errors;
}

FindpwdForm = reduxForm({
    form: 'findpwd',
    validate,
    initialValues: {
        username: '',
        password: '',
        authcode: '',
        passwordagain: '',
        ispasswordvisiable: false,
    }
})(FindpwdForm);


export class Page extends React.Component {

    constructor(props) {  
        super(props);  
        this.state = {
            innerHeight : window.innerHeight
        };
    }

    componentWillMount() {
    }

    onClickOK = (values)=> {
        console.dir(values);

        let payload = {
            username: values.username,
            password: values.password,
            authcode: values.authcode
        };

        // this.props.dispatch(findpwd_request(payload));
        //alert(JSON.stringify(formdata));
        // this.props.dispatch(findpwd(payload)).then((result)=> {
        //     this.props.history.goBack();
        // }).catch((error)=> {
        //     console.log("注册失败:" + JSON.stringify(error));
        // });
    }

    onClickLogin = ()=> {
        this.props.history.replace('/login');

    }

    onClickReturn =()=>{
        this.props.history.goBack();
    }

    back = ()=>{
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="UserLoginPage register" style={{minHeight : this.state.innerHeight + "px"}}>
                <div className="loginHead">
                    <span className="back" onClick={this.back}><i class="icon iconfont icon-Left" /></span>
                    <span className="title">找回密码</span>
                </div>
                <img src="./img/bg.png" className="bg" />
                <div className="loginPage">
                    <img src="./img/logo.png" className="logo" />
                    <div className="logintext">欢迎使用爱上门平台，请先注册/登录</div>
                    <FindpwdForm onClickOK={this.onClickOK} onClickLogin={this.onClickLogin} onClickReturn={this.onClickReturn}/>
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
