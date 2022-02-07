import { valid } from '../index';
import ApiAuth from '../utils/api/ApiAuth';
import { router } from './router/Router';
import Store from './Store';

interface MyObject {
  [key: string]: any;
}

class UserController {

  apiAuth: ApiAuth;
  resulrValid: MyObject | undefined;

  constructor() {
    this.apiAuth = new ApiAuth();
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
    .then((data: any) => {
      return data;
    });
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

}

export default new UserController(); 