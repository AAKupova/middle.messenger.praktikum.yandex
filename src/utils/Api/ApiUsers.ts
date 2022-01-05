import Api from './Api';
import { Options } from '../../types/type';

export default class ApiUsers extends Api {
  data: Options | FormData;

  constructor () {
    super();
  }

  putUsersAvatar(data: FormData){
    const headers = {
      'accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    };
    const options  = { ...data, ...headers };
    return this.feach.put(`${this.baseUrl}/user/profile/avatar`, options);
  }
  
}
