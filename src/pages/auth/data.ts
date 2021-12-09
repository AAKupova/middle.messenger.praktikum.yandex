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
