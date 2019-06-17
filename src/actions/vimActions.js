// @flow
import { createActions } from 'redux-actions';
import ActionsTypes from '../constants/actionTypes';

export const {
  login,
  loginUserData,
} = createActions({
  [ActionsTypes.LOGIN]: payload => payload,
  [ActionsTypes.LOGIN_USER_DATA]: user => ({ user }),
});
