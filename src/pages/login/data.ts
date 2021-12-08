import { valid } from '../../../src/index';

export const dataButton = {
  text: 'Войти',
  classButton: 'form__button',
};

export const dataForm = {
  name: 'login',
  title: 'Войти',
  link: 'Нет аккаунта?',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      console.log(e.target);
    },
  },
};

export const dataFieldEmail =
{
  name: 'email',
  type: 'email',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
  events: {
    focusin: function (e) {
      valid.isErrorStatusField(e);
    },

    focusout: function (e) {
      valid.isFieldValid(e);
  },
}
};



export const dataFieldPassword =
{
  name: 'second-password',
  type: 'password',
  max: '40',
  min: '8 ',
  required: 'required',
  autofocus: 'autofocus',
  events: {
    focusin: function (e) {
      valid.isErrorStatusField(e);
    },

    focusout: function (e) {
      valid.isFieldValid(e);
  },
}
};