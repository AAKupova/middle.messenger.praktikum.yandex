import AuthController from '../../controllers/AuthController';

import { createPassword } from '../components/fieldPassword';
import { FormLogin } from '../../components/FormLogin';
import { createLogin } from '../components/fieldLogin';
import { Validation } from '../../models/Validation';
import { createButton } from '../components/button';

export const initFormLogin = () => {
  AuthController.getDataUser();
  const validForm = new Validation('.form-login', '.button', '.field');

  const dataForm = {
    name: 'login',
    title: 'Войти',
    link: 'Нет аккаунта?',
    href: '/sign-up',
    events: {
      submit: (e: Event) => {
        e.preventDefault();
        AuthController.isValidData(e, validForm);
        AuthController.signIn();
      },
    },
  };

  return new FormLogin(dataForm, [
    createLogin({ validForm }),
    createPassword({ validForm, name: 'password', text: 'Пароль' }),
    createButton({
      text: 'Войти',
      classButton: 'form-login__button',
      disabled: 'disabled',
    }),
  ]);
};
