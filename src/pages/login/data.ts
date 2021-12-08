import { valid } from '../../../src/index';

export const dataButton = {
  text: 'Войти',
  classButton: 'form__button',
  disabled: 'disabled'
};

export const dataForm = {
  name: 'login',
  title: 'Войти',
  link: 'Нет аккаунта?',
  href: '/auth',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      valid.submit(e);
    },
  },
};

export const dataFieldEmail =
{
  name: 'email',
  type: 'email',
  max: '30',
  min: '2',
  error: 'Пожалуйста введите Ваш e-mail',
  required: 'required',
  autofocus: 'autofocus',
  events: {
    focusin: (e) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e) => {
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
  error: `Пароль должен быть 
    не меньше 8 символов и содержать одну заглавную букву`,
  events: {
    focusin: (e) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e) => {
      valid.isFieldValid(e);
    },
  }
};