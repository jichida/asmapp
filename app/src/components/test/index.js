import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  test_page_getproduct,
  test_inserttopic_request,
  test_getmytopic_request,
  test_gettopiclist_request,
  test_insertcommentstotopic_request,
  test_insertcommentstocomments_request,
  test_lovetopicadd_request,
  test_lovetopicunadd_request,
  test_lovecommentsadd_request,
  test_lovecommentsunadd_request,

  test_getproductinfo
} from '../../actions';

class Page extends Component {

    componentWillUnmount(){

    }

    render(){

        return (
            <div >
              <p onClick={()=>this.props.dispatch(test_page_getproduct({}))}>测试获取产品分页接口</p>
              
              <p onClick={()=>this.props.dispatch(test_getproductinfo({}))}>测试单个产品信息接口</p>

              <p onClick={()=>this.props.dispatch(test_inserttopic_request({}))}>帖子插入</p>
              <span onClick={()=>this.props.dispatch(test_gettopiclist_request({}))}>帖子获取</span>
              <span onClick={()=>this.props.dispatch(test_insertcommentstotopic_request({}))}>评论插入</span>
              <span onClick={()=>this.props.dispatch(test_lovetopicadd_request({}))}>帖子点赞</span>
              <span onClick={()=>this.props.dispatch(test_lovecommentsadd_request({}))}>评论点赞</span>
            </div>
        )
    }
};

Page = connect()(Page);
export default Page;
