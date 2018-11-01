import { createReducer } from 'redux-act';
import {
    inserttopic_result,
    getmytopic_result,
    gettopiclist_result,
    insertcommentstotopic_result,
    insertcommentstocomments_result,
    lovetopicadd_result,
    lovetopicunadd_result,
    lovecommentsadd_result,
    lovecommentsunadd_result,

    uicommentshow,
    uicommenthide,
} from '../../actions/index.js';
import {normalizrtopiclist} from '../normalizr';

const initial = {
    forum: {
        mytopiclist: [],
        topiclist: [],
        topics: {},
        comments: {},
        subcomment:{},
        users: {},
        selectedtopicid: '',
        selectedcommentid: '',
        iscommentshow: false,
        selectedtype: 'topic'
    },

};

    /*
     array:mytopiclist:
     array:alltopiclist
     topcis:{
     'id'：{...},
     'id':{....}
     }
     comments:{
     'id'：{...},
     'id':{....}
     }
     users:{
     'id':{},
     'id':{},
     ...
     }
     */
const forum = createReducer({
    [getmytopic_result]: (state, {result}) => {
        let list = result.docs;
        let mytopicremoteRowCount = result.total;
        let newdocs = normalizrtopiclist({list});
        if(state.mytopicinited) {//替换
            return {
                ...state,
                mytopicremoteRowCount,
                mytopicinited:false,
                mytopiclist: [...newdocs.result.list],
                topics: {
                    ...state.topics,...newdocs.entities.topics,
                },
                comments:{
                    ...state.comments,...newdocs.entities.comments
                },
                users: {
                    ...state.users,...newdocs.entities.users
                },
                subcomment:{
                    ...state.subcomment,...newdocs.entities.subcomment
                },
                topicremoteRowCount:0,
                topicinited:true,
                topiclist: [],
            };
        }
        return {
            ...state,
            mytopiclist: [...newdocs.result.list,...state.mytopiclist],
            topics: {
               ...state.topics,...newdocs.entities.topics,
            },
            comments:{
                ...state.comments,...newdocs.entities.comments
            },
            users: {
                ...state.users,...newdocs.entities.users
            },
            subcomment:{
                    ...state.subcomment,...newdocs.entities.subcomment
                },
        };
    },
    [gettopiclist_result]: (state, {result}) => {
        let list = result.docs;
        let topicremoteRowCount = result.total;
        let newdocs = normalizrtopiclist({list});
        if(state.topicinited) {//替换
            return {
                ...state,
                topicremoteRowCount,
                topicinited:false,
                topiclist: [...newdocs.result.list],
                topics: {
                    ...state.topics,...newdocs.entities.topics,
                },
                comments:{
                    ...state.comments,...newdocs.entities.comments
                },
                users: {
                    ...state.users,...newdocs.entities.users
                },
                subcomment:{
                    ...state.subcomment,...newdocs.entities.subcomment
                },
                mytopicremoteRowCount:0,
                mytopicinited:true,
                mytopiclist: [],
            };
        }
        return {
            ...state,
            topiclist: [...newdocs.result.list,...state.topiclist],
            topics: {
                ...state.topics,...newdocs.entities.topics,
            },
            comments:{
                ...state.comments,...newdocs.entities.comments
            },
            users: {
                ...state.users,...newdocs.entities.users
            },
            subcomment:{
                    ...state.subcomment,...newdocs.entities.subcomment
                },
        };
    },
    [inserttopic_result]: (state, payload, prev) => {
        console.log("prev:" + JSON.stringify(prev));
        let newtopic = payload;
        return { ...state,
            topiclist:[newtopic._id,...state.topiclist],
                mytopiclist:[newtopic._id,...state.mytopiclist],
                topics:{
                    ...state.topics,
                    [newtopic._id]:newtopic
                 },
                 users:{
                     ...state.users,
                     [state.selfuser._id]:state.selfuser
                 }
    };
    },
    [lovetopicadd_result]: (state, payload) => {
        let {updatedtopic} = payload;
        return { ...state,
            topics:{
                ...state.topics,
                [updatedtopic._id]:updatedtopic
            },
            users:{
                ...state.users,
                [state.selfuser._id]:state.selfuser
            }
        };
    },
    [lovetopicunadd_result]: (state, payload) => {
        let {updatedtopic} = payload;
        return { ...state,
            topics:{
                 ...state.topics,
                [updatedtopic._id]:updatedtopic
            }
        };
    },
    [lovecommentsadd_result]: (state, payload) => {
        let {updatedcomment} = payload;
        return { ...state,
            comments:{
                ...state.comments,
                [updatedcomment._id]:updatedcomment
            },
            users:{
                ...state.users,
                [state.selfuser._id]:state.selfuser
            }
        };
    },
    [lovecommentsunadd_result]: (state, payload) => {
        let updatedcomment = payload;
        return { ...state,
            comments:{
                ...state.comments,
                [updatedcomment._id]:updatedcomment
            }
        };
    },
    [insertcommentstotopic_result]: (state, payload) => {
        let { newcomments,updatedtopic }  = payload;
        if(newcomments){
            return { ...state,
                comments:{
                    ...state.comments,
                    [newcomments._id]:newcomments
                },
                users:{
                    ...state.users,
                    [state.selfuser._id]:state.selfuser
                }
            };
        }
        if(updatedtopic){
            return { ...state,
                topics:{
                    ...state.topics,
                    [updatedtopic._id]:updatedtopic
                },
                users:{
                    ...state.users,
                    [state.selfuser._id]:state.selfuser
                }
            };
        }
    },
    [insertcommentstocomments_result]: (state, payload) => {
        let { newcomments,updatedcomment } = payload;
        if(newcomments){
            return { ...state,
                subcomment:{
                    ...state.subcomment,
                    [newcomments._id]:newcomments
                },
                users:{
                    ...state.users,
                    [state.selfuser._id]:state.selfuser
                }
            };
        }
        if(updatedcomment){
            return { ...state,
                comments:{
                ...state.comments,
                        [updatedcomment._id]:updatedcomment
                },
                users:{
                    ...state.users,
                    [state.selfuser._id]:state.selfuser
                }
            };
        }
    },
    [uicommentshow]: (state, payload) => {
        let selectedtopicid = payload.selectedtopicid;
        let selectedcommentid = payload.selectedcommentid;
        return {...state,selectedtopicid,selectedcommentid,selectedtype:payload.selectedtype,iscommentshow:true};
    },
    [uicommenthide]: (state, payload) => {
        return {...state,iscommentshow:false};
    },

}, initial.forum);

export default forum;
