import React, { Component } from 'react';
import { connect } from 'react-redux';
import {test_page_getproduct} from '../../actions';

class Page extends Component {

    componentWillUnmount(){

    }
    click_test_page_getproduct = ()=>{
      this.props.dispatch(test_page_getproduct({}));
    }
    render(){

        return (
            <div >
              <span onClick={this.click_test_page_getproduct}>测试获取产品分页接口</span>
            </div>
        )
    }
};

Page = connect()(Page);
export default Page;
