// @flow
import { handleActions } from 'redux-actions';

import {
  loginUserData,
  // isAuthData,
} from '../actions/vimActions';
export const initialState = {
  // isAuth: false,
  // user: {
  //   access_token: '',
  // },
};

export default handleActions({
  [loginUserData]: (state, action) => {
    const {user} = action.payload;
    debugger
    return {
      ...state, user,
    };
  },

  // [isAuthData]: (state, action) => {
  //   const isAuth = action.payload;
  //   return {
  //     ...state,
  //     isAuth,
  //   };
  // },
}, initialState);
