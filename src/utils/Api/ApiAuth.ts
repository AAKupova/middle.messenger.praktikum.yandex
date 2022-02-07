import Api from './Api';
import { Options } from '../../types/type';

export default class ApiAuth extends Api {
  data: Options;

  constructor () {
    super();
  }

  postAuthSignup(data: Options) {
    const options  = {
      data: {
        ...data
      },
      headers: {
        'Content-Type': 'application/json',
      } 
    };
    return this.feach.post(`${this.baseUrl}/auth/signup`, options);
  }

  postAuthLogout(data: Options) {
    const options  = {
      data: {
        ...data
      },
      headers: {
        'accept': 'application/json',
      } 
    };
    return this.feach.post(`${this.baseUrl}/auth/logout`, options);
  }

  postAuthSignin(data: Options) {
    const options  = {
      data: {
        ...data
      },
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      } 
    };
    console.log(options);
    return this.feach.post(`${this.baseUrl}/auth/signin`, options);
  }

  getAuthUser() {
    const options  = {
      headers: {
        'accept': 'application/json',
      } 
    };
    return this.feach.get(`${this.baseUrl}/auth/user`, options);
  }
}
