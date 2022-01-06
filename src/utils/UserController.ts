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

  authSignup() {
    return this.apiAuth.postAuthSignup(this.addData())
    .then((data: any) => data.response)
    .then((data: any) => {
      return data;
    });
  }

  getUser(){
    this.authSignup()
      .then((data: any) => {
        this.apiAuth.getAuthUser(data)
          .then((data: any) => data.response)
          .then(data => {
            Store.set('user', data);

            if(Store.getState().user){
              console.log(Store.getState());
              router.go('/messenger/');
            }
            
          });
      });
  }
}

export default new UserController(); 