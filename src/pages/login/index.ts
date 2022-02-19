import { FormLogin } from '../../components/FormLogin';
import { Validation } from '../../models/Validation';
import AuthController from '../../controllers/AuthController';

import { createPassword } from './components/password';
import { createEmail } from './components/email';
import { createButton } from './components/button';

export const initFormLogin = () => {
  const validFormLogin = new Validation('.form-login', '.button', '.field');

  const dataForm = {
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

  return new FormLogin(dataForm, [
    createEmail({ validFormLogin }),
    createPassword({ validFormLogin }),
    createButton(),
  ]);
};
