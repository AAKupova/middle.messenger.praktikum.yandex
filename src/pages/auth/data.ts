import { valid } from '../../../src/index';

export const dataFieldEmail =
{
  name: 'email',
  type: 'email',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Пожалуйста введите Ваш e-mail',
  events: {
    focusin: (e: Event) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: Event) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataFieldLogin =
{
  name: 'login',
  type: 'text',
  max: '20',
  min: '3',
  required: 'required',
  autofocus: 'autofocus',
  error: `Login может содержать цифры, дефис,
  нижнее подчёркивание и не меньше 3 символов`,
  events: {
    focusin: (e: Event) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: Event) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataFieldFirstName =
{
  name: 'first_name',
  type: 'text',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Имя должно начинатся с заглавной буквы и не меньше 2 символов',
  events: {
    focusin: (e: Event) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: Event) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataFieldSecondName =
{
  name: 'second_name',
  type: 'text',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Имя должно начинатся с заглавной буквы и не меньше 2 символов',
  events: {
    focusin: (e: Event) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: Event) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataFieldPhone =
{
  name: 'phone',
  type: 'phone',
  max: '15',
  min: '10',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Введите номер телефона',
  events: {
    focusin: (e: Event) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: Event) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataFieldPassword =
{
  name: 'password',
  type: 'password',
  max: '40',
  min: '8',
  required: 'required',
  autofocus: 'autofocus',
  error: `Пароль должен быть 
    не меньше 8 символов и содержать одну заглавную букву`,
  events: {
    focusin: (e: Event) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: Event) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataFieldSecondPassword =
{
  name: 'second_password',
  type: 'password',
  max: '40',
  min: '8',
  required: 'required',
  autofocus: 'autofocus',
  error: `Пароль должен быть 
    не меньше 8 символов и содержать одну заглавную букву`,
  events: {
    focusin: (e: Event) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: Event) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataButton = {
  text: 'Зарегистрироваться',
  classButton: 'form__button',
};

export const dataForm = {
  title: 'Регестрация',
  link: 'Уже есть аккаунт',
  href: '/login',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      valid.submit(e);
    },
  },
};
