// @flow
import AxiosService from './axiosService';

class Auth extends AxiosService {
  // signUp = (data: any) => this.post({ url: '/api/v1/signup', data });

  login = (data: any) => this.post({ url: 'http://localhost:3001/api/v1/users/login', data });
}

const AuthApi = new Auth();

export default AuthApi;
