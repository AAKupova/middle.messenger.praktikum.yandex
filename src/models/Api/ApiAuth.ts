import Api from './Api';
import { Options } from '../../types/type';

export default class ApiAuth extends Api {
  data: Options;

  constructor () {
    super();
  }

  postAuthSignup(data: Options) {
    return this.feach.post(`${this.baseUrl}/auth/signup`, this.mergeData(data));
  }

  postAuthLogout(data: Options) {
    return this.feach.post(`${this.baseUrl}/auth/logout`, this.mergeData(data));
  }

  postAuthSignin(data: Options) {
    return this.feach.post(`${this.baseUrl}/auth/signin`, this.mergeData(data));
  }

  getAuthUser() {
    return this.feach.get(`${this.baseUrl}/auth/user`, this.mergeData());
  }

  private mergeData(data: any = null) {
    if(data){ 
      return { data: { ...data }, headers: { ...(this.headers) }};
    }
    return { headers: { ...(this.headers) }};
  }
}
