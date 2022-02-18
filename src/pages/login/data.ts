import { validFormLogin } from '../../../src/index';
import AuthController from '../../controllers/AuthController';

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
      AuthController.isValidData(e, validFormLogin);
      AuthController.signIn();
    },
  },
};

export const dataFieldEmail =
{
  name: 'login',
  type: 'text',
  max: '30',
  min: '2',
  error: 'Некорректный e-mail',
  required: 'required',
  autofocus: 'autofocus',
  patter: 'login',
  text: 'Логин',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      validFormLogin.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      validFormLogin.isFieldValid(e);
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
      validFormLogin.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      validFormLogin.isFieldValid(e);
    },
  }
};