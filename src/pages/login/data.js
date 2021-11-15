export const data = {
  avatar: true,
  title: 'Вход',
  fields: [
    {
      field: 'Login',
      name: 'login',
      type: 'text',
      max: '30',
      min: '2',
      required: 'required',
      autofocus: 'autofocus',
    },
    {
      field: 'Password',
      name: 'password',
      type: 'password',
      max: '30',
      min: '2',
      required: 'required',
      autofocus: 'autofocus',
    },
  ],

  button: 'Войти',
  classButton: 'form__button',
  classAvatar: 'form__avatar',
  text: 'Нет аккаунта?',
};
