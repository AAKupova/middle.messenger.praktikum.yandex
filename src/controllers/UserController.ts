import ApiUsers from '../models/Api/ApiUsers';
import AuthController from './AuthController';
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
    return this.putInStoreData(this.apiUser.putAvatar(data));
  }

  editProfile() {
    return this.putInStoreData(this.apiUser.putProfile(this.addData()));
  }

  editPassword() {
    this.apiUser.putPassword(this.addData())
    .then((data: any) => data.response)
    .then((data: UserData) => console.log(data));

    return  AuthController.getDataUser();
  }

  putInStoreData(promis: any) {
    return promis
    .then((data: any) => data.response)
    .then((data: UserData) => Store.set('user', data));
  }

  userSearch() {
    this.apiUser.postUserSearch(this.addData())
    .then((data: any) => data.response)
    .then((data: UserData) => Store.set('users', data)); 
  }
}

export default new UserController(); 