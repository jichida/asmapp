import React from 'react';
import { NavBar } from 'antd-mobile';
import {  Comment, } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Bigimg from './bigimg.js';
import {
    uicommenthide,
} from '../../actions/index.js';

import ForumComment from './comment.js';
import ForumTopic from './topic.js';
import FeedReplyForm from './reply.js';
import lodashmap from 'lodash.map';

export class Topic extends React.Component {
  componentWillMount () {
  }

  render() {
    const {topic,comments} = this.props;
    let commentsco = [];
    let newcomments = [];

    for (let i = topic.comments.length-1; i>=0; i--) {
        newcomments.push(topic.comments[i]);
    }

    lodashmap(newcomments,(commentid)=>{
      commentsco.push(<ForumComment showchild={true} key={commentid} comment={comments[commentid]} />);
    });
    return  (<div >
                <ForumTopic topic={topic} />
                    <Comment.Group>
                        {commentsco}
                    </Comment.Group>
            </div>);

  }
}

let FeedReplyFormShow = ({iscommentshow})=>{
           return(<div className="tb">
                    {iscommentshow?<FeedReplyForm />:null}
                </div>);
}
const mapStateToPropsFeedReplyFormShow = ({forum:{iscommentshow}}) => {
    return {iscommentshow};
}
FeedReplyFormShow = connect(mapStateToPropsFeedReplyFormShow)(FeedReplyFormShow);

export class Page extends React.Component {

    componentWillMount () {
        this.props.dispatch(uicommenthide());
    }

    onClickPage =()=>{//点击空白处，隐藏?如何判断点击空白
        this.props.dispatch(uicommenthide());
    }
    onClickReturn=()=>{
        this.props.history.goBack();
    }
    render() {
        const {topics,comments} = this.props;
        let topicid = this.props.match.params.topicid;
        let ToptipCo = null;
        let topicsco = <Topic key={topicid} topic={topics[topicid]} comments={comments}/>;
        return (
            <div className="commentInfoPage">
                <div className="th">
                    <NavBar lefttitle="返回" title="帖子详情" onClickLeft={this.onClickReturn} />
                </div>
                <div className="tt">
                    {ToptipCo}
                </div>
                <div className="tc">
                    {topicsco}
                </div>
                <FeedReplyFormShow />
                <Bigimg />
            </div>);
  }
}

const mapStateToProps = ({forum:{comments,useralerttopics,users,topics}}) => {
    return {comments,useralerttopics,users,topics};
}
Page = connect(mapStateToProps)(Page);
export default Page;
