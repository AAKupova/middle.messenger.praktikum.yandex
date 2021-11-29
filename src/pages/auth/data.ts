import { valid } from '../../../src/index';

export const dataFieldEmail =
{
  name: 'email',
  type: 'email',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Некорректный e-mail',
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

export const dataFieldLogin =
{
  name: 'login',
  type: 'text',
  max: '20',
  min: '3',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Некорректный login',
  patter: 'login',
  text: 'Логин',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
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
  error: 'Имя с заглавной буквы',
  patter: 'name',
  text: 'Имя',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
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
  error: 'Имя с заглавной буквы',
  patter: 'name',
  text: 'Фамилия',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
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
  error: 'Некорректный номер телефона',
  patter: 'phone',
  text: 'Телефон',
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
  min: '8',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Пароль не меньше 8 символов',
  patter: 'password',
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

export const dataFieldSecondPassword =
{
  name: 'second_password',
  type: 'password',
  max: '40',
  min: '8',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Пароль не меньше 8 символов',
  patter: 'password',
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

export const dataButton = {
  text: 'Зарегистрироваться',
  classButton: 'form-auth__button',
};

export const dataForm = {
  title: 'Регестрация',
  link: 'Уже есть аккаунт',
  href: '/login',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      valid.submit(e as any);
    },
  },
};
