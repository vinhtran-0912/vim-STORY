import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { login, loginUserData } from '../actions/vimActions';
import AuthApi from '../services/authApi';

function* loginSaga(action) {
  const { values, meta: { setErrors } } = action.payload;
  try {
    const response = yield call([AuthApi, AuthApi.login], values);
    console.log(response.data);
    yield put(loginUserData(response.data));
    // yield put(isAuthData(isAuthor));
    // yield put(getPostData());
  } catch (e) {
    setErrors({ api: e.response.data.message });
  }
}

export default function* () {
  yield all([
    takeLatest(login, loginSaga),
  ]);
}
