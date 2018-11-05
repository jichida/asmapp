import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import forum from './community';
import userlogin from './userlogin';
import app from './app';
import eshop from './eshop';
import newtopicfileupload from './community/newtopicfileupload';

export default combineReducers(
  {
    newtopicfileupload,
    eshop,
    app,
    userlogin,
    forum,
    form: formReducer,
    router: routerReducer,
  });
