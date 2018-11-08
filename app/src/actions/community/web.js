import { createAction } from 'redux-act';

export const inserttopic_request = createAction('inserttopic_request');
export const inserttopic_result = createAction('inserttopic_result');

//
export const getmytopic_request = createAction('getmytopic_request');
export const getmytopic_result = createAction('getmytopic_result');

export const gettopiclist_request = createAction('gettopiclist_request');
export const gettopiclist_result = createAction('gettopiclist_result');


export const insertcommentstotopic_request = createAction('insertcommentstotopic_request');
export const insertcommentstotopic_result = createAction('insertcommentstotopic_result');

export const insertcommentstocomments_request = createAction('insertcommentstocomments_request');
export const insertcommentstocomments_result = createAction('insertcommentstocomments_result');

export const lovetopicadd_request = createAction('lovetopicadd_request');
export const lovetopicadd_result = createAction('lovetopicadd_result');

export const lovetopicunadd_request = createAction('lovetopicunadd_request');
export const lovetopicunadd_result = createAction('lovetopicunadd_result');

export const lovecommentsadd_request = createAction('lovecommentsadd_request');
export const lovecommentsadd_result = createAction('lovecommentsadd_result');

export const lovecommentsunadd_request = createAction('lovecommentsunadd_request');
export const lovecommentsunadd_result = createAction('lovecommentsunadd_result');
