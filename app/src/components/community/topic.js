import React from 'react';

import { Feed,  Icon,  } from 'semantic-ui-react'
import lodashmap from 'lodash.map';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getthumbnailurl} from '../../util/fileupload.js';
import {setbackhandler} from '../../env/android';

import {
    lovetopicadd_request,
    lovetopicunadd_request,
    uicommentshow,
    uicommenthide,
    uicommentimg,
    set_weui,
} from '../../actions/index.js';

import moment from 'moment';

import Layzr from 'layzr.js';

//let loadingimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZFNzM5Rjk1NjVBMTFFNzhGQzY4N0ZCQjQ2M0RDNEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzZFNzM5RkE1NjVBMTFFNzhGQzY4N0ZCQjQ2M0RDNEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NkU3MzlGNzU2NUExMUU3OEZDNjg3RkJCNDYzREM0RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NkU3MzlGODU2NUExMUU3OEZDNjg3RkJCNDYzREM0RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PngAk1MAAAAGUExURe7u7ru6utT4gdkAAABBSURBVHja7NUxCgAgDATB3P8/bWthpRAwzJRBsl2sAgAAAOZI8vxCZBv/GDlvFhERmRmZc7u6I35GAAAA4NoSYACB/gDKNOdHTwAAAABJRU5ErkJggg==";

let ForumTopic = ({loginsuccess,userid,history,topic,users,dispatch,profile,onClickPinbi}) => {

    const instance = Layzr({
        normal: 'data-normal',
        retina: 'data-retina'
    })

    document.addEventListener('DOMContentLoaded', event => {
        instance
          .update()           // track initial elements
          .check()            // check initial elements
          .handlers(true)     // bind scroll and resize handlers
    })

    let islovedbyme = false;//判断love数组是否有自己
    if(topic.loves.indexOf(userid) !== -1){
        islovedbyme = true;
    }

    let showtopictocomment = (e)=>{
      if(loginsuccess){

        let oldhandlerbackfn = setbackhandler(()=>{
        dispatch(uicommenthide({}));
        setbackhandler(oldhandlerbackfn);
      });

        dispatch(uicommentshow({
          selectedcommentid:'',
          selectedtopicid:topic._id,
          selectedtype:'topic'
        }));
        e.stopPropagation();
        // history.push(`/communityreplypage/${topic._id}`});
      }
      else{

        history.push('/login');
      }
    }
  let clicklove =()=>{
      // console.log('clicklove:${islovedbyme}');
    if(loginsuccess){
      let payload = {
        topicid:topic._id,
      };
      dispatch(islovedbyme?lovetopicunadd_request(payload):lovetopicadd_request(payload));
    }
    else{
      history.push('/login');
    }
  }

  let jubao=()=>{
      dispatch(set_weui({
        alert : {
            show : true,
            title : "举报成功",
            text : "我们已经接收到您的举报信息，谢谢！",
            buttonsClick : ()=>{}
        }
      }))
  }

  //点击显示大图<img data-normal={loadingimg} data-retina={url} onClick={()=>{clickimg(topic.picurl, index)}}  />
  let clickimg = (pic, index)=>{


    let oldhandlerbackfn = setbackhandler(()=>{
      let hidebigimg = {
        bigimgshow : false,
        bigimglist : [],
        bigimgindex : 0
      };
      dispatch(uicommentimg(hidebigimg));
      setbackhandler(oldhandlerbackfn);
    });

    let imgObj = {
      bigimgshow : true,
      bigimglist : pic,
      bigimgindex : index
    };
    dispatch(uicommentimg(imgObj));
  }

    let imgcos = lodashmap(topic.picurl,(url,index)=>{
        return (
              <div
              key={url}
              className="communityImg"
              style={{
                  background:"url('"+getthumbnailurl(url)+"') no-repeat",
                  backgroundSize: "100%",
                  backgroundPosition: "center",
              }}
              onClick={()=>{clickimg(topic.picurl, index)}}>

          </div>
        );
    })

    let pingbi =(id)=>{
        onClickPinbi(id);
    }
    if (typeof topic.created_at === 'string') {
        topic.created_at= new Date(Date.parse(topic.created_at));
    }
    console.log("users-->" + JSON.stringify(users));
    console.log("topic.creator-->" + JSON.stringify(topic.creator));
    return (
        <Feed>
            <Feed.Event>
                <Feed.Content>
                    <div className="feedHead">
                      <Feed.Label image={users[topic.creator].profile.avatar}>
                      </Feed.Label>
                      <Feed.Summary>
                          <span className="summaryName">{users[topic.creator].profile.nickname}</span>
                          <Feed.Date>{moment(topic.created_at).format("MM月DD日 HH时mm分")}</Feed.Date>
                      </Feed.Summary>
                  </div>
                  <div className="feedContent">
                      <Feed.Extra text key='text'>
                          {topic.title}
                      </Feed.Extra>
                      <Feed.Extra images key='image'>
                          {imgcos}
                      </Feed.Extra>
                  </div>
                    <Feed.Meta className="myMeta">
                        <div
                            className="addCommunity"
                            onClick={showtopictocomment}
                            >
                            <Icon name="talk outline"/>
                            评论 ({topic.comments.length})
                        </div>
                        <div className="addCommunity" onClick={clicklove} style={{color:islovedbyme?"#C00":"#333"}}>
                            <Icon name="like outline"/>
                            赞 ({topic.loves.length})
                        </div>
                        <div className="addCommunity" onClick={jubao}>
                            举报
                        </div>
                        <div className="addCommunity" onClick={()=>{pingbi(topic.creator);}}>
                            屏蔽
                        </div>
                    </Feed.Meta>
                </Feed.Content>
            </Feed.Event>
        </Feed>
    );
}

//loginsuccess,history,topic,users,dispatch
// {profile : {avatar : "http://shuizhihe.com28.cn:3100/uploader/upload_b6c8ea0588d5997a9455196a49ed58e9.jpg", nickname : "神木"}}

const mapStateToProps =  ({userlogin:{loginsuccess,userid,profile},forum:{users}, userlogin}) =>{
    // console.log(userlogin);
    return {loginsuccess,userid,users,profile};
};

ForumTopic = connect(mapStateToProps)(ForumTopic);
ForumTopic =withRouter(ForumTopic);
export default ForumTopic;
