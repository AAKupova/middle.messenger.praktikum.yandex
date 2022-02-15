import Api from './Api';
import { Options } from '../../types/type';

export default class ApiUsers extends Api {
  data: Options;

  constructor() {
    super();
  }

  putUsersAvatar(formData: FormData) {
    const headers = {
      'Content-Type': ' multipart/form-data',
      'mode': 'cors',
      credentials: 'include',
    };
    const options = { formData, ...headers };
    return this.feach.put(`${this.baseUrl}/user/profile/avatar`, options);
  }

  postUserAvatar (strUrl:string) {
    const headers = {
      'accept': 'application/json',
    };
    const options = { ...headers };
    return this.feach.post(`${this.baseUrl}/user/profile/avatar/${strUrl}`, options);
  }

  putUserProfile(data: Options){
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    };
    const options = { data, headers };
      return this.feach.put(`${this.baseUrl}/user/profile`, options);
  }

}
