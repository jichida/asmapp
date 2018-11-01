import { createAction } from 'redux-act';

export const inserttopic_request = createAction('forum.inserttopic_request');
export const inserttopic_result = createAction('forum.inserttopic_result');

//forum.
export const getmytopic_request = createAction('forum.getmytopic_request');
export const getmytopic_result = createAction('forum.getmytopic_result');

export const gettopiclist_request = createAction('forum.gettopiclist_request');
export const gettopiclist_result = createAction('forum.gettopiclist_result');


export const insertcommentstotopic_request = createAction('forum.insertcommentstotopic_request');
export const insertcommentstotopic_result = createAction('forum.insertcommentstotopic_result');

export const insertcommentstocomments_request = createAction('forum.insertcommentstocomments_request');
export const insertcommentstocomments_result = createAction('forum.insertcommentstocomments_result');

export const lovetopicadd_request = createAction('forum.lovetopicadd_request');
export const lovetopicadd_result = createAction('forum.lovetopicadd_result');

export const lovetopicunadd_request = createAction('forum.lovetopicunadd_request');
export const lovetopicunadd_result = createAction('forum.lovetopicunadd_result');

export const lovecommentsadd_request = createAction('forum.lovecommentsadd_request');
export const lovecommentsadd_result = createAction('forum.lovecommentsadd_result');

export const lovecommentsunadd_request = createAction('forum.lovecommentsunadd_request');
export const lovecommentsunadd_result = createAction('forum.lovecommentsunadd_result');
