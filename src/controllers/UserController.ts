import ApiUsers from '../models/Api/ApiUsers';
import { Controller } from './Controller';
import { UserData } from '../types/type';
import Store from '../models/Store';

class UserController extends Controller {
  apiUser: ApiUsers;

  constructor() {
    super();
    this.apiUser = new ApiUsers();
  }

  editAvatar(data: FormData) {
    return this.putInStoreData(this.apiUser.putUsersAvatar(data));
  }

  editProfile() {
    return this.putInStoreData(this.apiUser.putUserProfile(this.addData()));
  }

  putInStoreData(promis: any) {
    return promis
    .then((data: any) => data.response)
    .then((data: UserData) => Store.set('user', data));
  }
}

export default new UserController(); 