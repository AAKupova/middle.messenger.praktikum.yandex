import { valid } from '../../../src/index';
import ApiAuth from '../../utils/Api/ApiAuth';

export const dataButton = {
  text: 'Войти',
  classButton: 'form-login__button',
  disabled: 'disabled'
};

export const dataForm = {
  name: 'login',
  title: 'Войти',
  link: 'Нет аккаунта?',
  href: '/sign-up',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      const result = valid.submit(e as any);
      const obj = {};
      if (result) {
        result.forEach((value, key) => {
          obj[key] = value;
        });
      }

      const apiAuth = new ApiAuth();
      apiAuth.postAuthSignin(obj)
      .then(data => {
        console.log(data);
        return data;
      // }).then(data => {
      //   console.log(data);
      //   apiAuth.getAuthUser()
      //   .then(r => r.json())
      //   .then(data => {
      //     console.log('user', data);
      //   });
      });

    },
  },
};

export const dataFieldEmail =
{
  name: 'email',
  type: 'email',
  max: '30',
  min: '2',
  error: 'Некорректный e-mail',
  required: 'required',
  autofocus: 'autofocus',
  patter: 'email',
  text: 'Почта',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
  },
}
};

export const dataFieldPassword =
{
  name: 'password',
  type: 'password',
  max: '40',
  min: '8 ',
  required: 'required',
  autofocus: 'autofocus',
  patter: 'password',
  error: 'Пароль не меньше 8 символов',
  text: 'Пароль',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  }
};