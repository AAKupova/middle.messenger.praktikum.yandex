import { FormAuth } from '../../components/FormAuth';
import { Validation } from '../../models/Validation';
import AuthController from '../../controllers/AuthController';

import { createFirstName } from './components/firstName';
import { createSecondName } from './components/secondName';
import { createSecondPassword } from './components/secondPassword';
import { createEmail } from './components/email';
import { createLogin } from './components/login';
import { createPhone } from './components/phone';
import { createPassword } from './components/password';
import { createButton } from '../components/button';

export const initFormAuth = () => {
  const validFormAuth = new Validation('.form-auth', '.button', '.field');

  const dataForm = {
    title: 'Регестрация',
    link: 'Уже есть аккаунт',
    href: '/',
    events: {
      submit: (e: Event) => {
        e.preventDefault();
        AuthController.isValidData(e, validFormAuth);
        AuthController.signUp();
      },
    },
  };

  return new FormAuth(dataForm, [
    createFirstName({ validFormAuth }),
    createSecondName({ validFormAuth }),
    createSecondPassword({ validFormAuth }),
    createEmail({ validFormAuth }),
    createLogin({ validFormAuth }),
    createPhone({ validFormAuth }),
    createPassword({ validFormAuth }),
    createButton({
      text: 'Зарегистрироваться',
      classButton: 'form-auth__button',
      disabled: 'none'
    }),
  ]);
};
