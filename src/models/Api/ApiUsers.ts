import Api from './Api';
import { Options } from '../../types/type';

export default class ApiUsers extends Api {
  data: Options;

  constructor() {
    super();
  }

  putAvatar(formData: FormData) {
    const headers = {
      'Content-Type': ' multipart/form-data',
      'accept': 'application/json',
    };
    const options = { formData, ...headers };
    return this.feach.put(`${this.baseUrl}/user/profile/avatar`, options);
  }

  putProfile(data: any){
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    };
    const options = { data, headers };
    return this.feach.put(`${this.baseUrl}/user/profile`, options);
  }

  putPassword(data: any) {
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const options = { data, headers };
    return this.feach.put(`${this.baseUrl}/user/password`, options);
  }

}
