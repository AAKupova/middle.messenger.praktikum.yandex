import ApiAuth from '../models/Api/ApiAuth';
import { router } from '../routers/Router';
import { Controller } from './Controller';
import Store from '../models/Store';

class AuthController extends Controller {
  apiAuth: ApiAuth;

  constructor() {
    super();
    this.apiAuth = new ApiAuth();
  }

  //Регистрация!
  signUp() {
    return this.apiAuth
      .postAuthSignup(this.addData())
      .then((data: any) => data.response)
      .then((data: any) => {
        this.getDataUser();
        return data;
      });
  }

  //Вход!
  signIn() {
    return this.apiAuth.postAuthSignin(this.addData()).then((data: any) => {
      router.go('/messenger/');
      this.getDataUser();
      return data;
    });
  }

  //Выход!
  logout() {
    return this.apiAuth.postAuthLogout(this.addData()).then((data: any) => {
      router.go('/');
      this.getDataUser();

      return data;
    });
  }

  //Получение данных user
  getDataUser() {
    this.apiAuth
      .getAuthUser()
      .then((data: any) => data.response)
      .then((data) => {
        Store.set('user', data);
        router.go('/messenger/');
      })
      .catch((err) => {
        router.go('/');

        throw err;
      });
  }
}

export default new AuthController();
