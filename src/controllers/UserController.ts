import { valid } from '../index';
import ApiAuth from '../models/Api/ApiAuth';
import ApiUsers from '../models/Api/ApiUsers';
import { router } from '../routers/Router';
import { UserData } from '../types/type';
import Store from '../models/Store';

interface MyObject {
  [key: string]: any;
}

class UserController {

  apiAuth: ApiAuth;
  apiUser: ApiUsers;
  resulrValid: MyObject | undefined;

  constructor() {
    this.apiAuth = new ApiAuth();
    this.apiUser = new ApiUsers();
  }

//Валидация данных!
  isValidData(e: any){
    this.resulrValid = valid.submit(e as any);
  }

  addData() {
    const obj: MyObject = {};

    if (this.resulrValid) {
      this.resulrValid.forEach((value: string, key: string) => {
        obj[key] = value;
      });
    }

    return obj;
  }

//Авторизация!
  authSignUp() {
    return this.apiAuth.postAuthSignup(this.addData())
    .then((data: any) => data.response)
    .then((data: any) => {
      return data;
    });
  }

//Получение данных user при авторизации!
  getSignUpDataUser(){
    this.authSignUp()
      .then((data: any) => {
        console.log(data);
        this.apiAuth.getAuthUser()
          .then((data: any) => data.response)
          .then(data => {
            Store.set('user', data);

            if(Store.getState()){
              router.go('/messenger/');
            }
            
          });
      });
  }

//Получение данных user при авторизации!
  getSignInDataUser(){
    this.authSignIn()
      .then((data: any) => {
        console.log(data);
        this.apiAuth.getAuthUser()
          .then((data: any) => data.response)
          .then(data => {
            Store.set('user', data);

            if(Store.getState()){
              router.go('/messenger/');
            }
            
          });
      });
  }

//Вход!
authSignIn() {
    return this.apiAuth.postAuthSignin(this.addData())
    .then((data: any) => data.response)
    .then((data: any) => data);
  }

//Выход!
  authLogout() {
    return this.apiAuth.postAuthLogout(this.addData())
    .then((data: any) => data.response)
    .then((data: any) => {
      router.go('/');
      return data;
    });
  }

  putAvatar(data: FormData) {
    return this.apiUser.putUsersAvatar(data)
    .then((data: any) => data.response)
    .then((data: UserData) => Store.set('user', data));
  }

  // //Получение данных user при авторизации!
  // getDataAvatarUser(data:any){
  //   this.putAvatar(data)
  //   .then((data: any) => data.response)
  //   .then((data: any) => {
  //     Store.set('user', data);
  //     console.log(Store.getState());
  //   });
  // }

  putUserProfile() {
    return this.apiUser.putUserProfile(this.addData())
    .then((data: any) => data.response)
    .then((data: UserData) => Store.set('user', data));
  }

  // getUserAvatar(file: string) {
  //   return this.apiUser.getUserAvatar(file)
  //   .then((data: any) => data.response)
  //   .then((data: UserData) => {
  //     console.log(data);
  //   });
  // }
}

export default new UserController(); 