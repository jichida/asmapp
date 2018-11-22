import { createAction } from 'redux-act';

export const notify_socket_connected = createAction('notify_socket_connected');
export const common_err = createAction('common_err');
export const set_mainSelectedTab = createAction('set_mainSelectedTab');

export const getTranslateList_request = createAction('getTranslateList_request');
export const getTranslateList_result = createAction('getTranslateList_result');
export const wait_getTranslateList_request = createAction('wait_getTranslateList_request');
export const wait_getTranslateList_result = createAction('wait_getTranslateList_result');
