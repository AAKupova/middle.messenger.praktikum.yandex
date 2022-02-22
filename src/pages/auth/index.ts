import AuthController from '../../controllers/AuthController';

import { createSecondName } from '../components/fieldSecondName';
import { createFirstName } from '../components/fieldFirstName';
import { createPassword } from '../components/fieldPassword';
import { createEmail } from '../components/fieldEmail';
import { createLogin } from '../components/fieldLogin';
import { createPhone } from '../components/fieldPhone';
import { FormAuth } from '../../components/FormAuth';
import { Validation } from '../../models/Validation';
import { createButton } from '../components/button';

export const initFormAuth = () => {
  const validForm = new Validation('.form-auth', '.button', '.field');

  const dataForm = {
    title: 'Регестрация',
    link: 'Уже есть аккаунт',
    href: '/',
    events: {
      submit: (e: Event) => {
        e.preventDefault();
        AuthController.isValidData(e, validForm);
        AuthController.signUp();
      },
    },
  };

  return new FormAuth(dataForm, [
    createPassword({ validForm, name: 'password', text: 'Пароль' }),
    createFirstName({ validForm }),
    createSecondName({ validForm }),
    createEmail({ validForm }),
    createLogin({ validForm }),
    createPhone({ validForm }),
    createButton({
      text: 'Зарегистрироваться',
      classButton: 'form-auth__button',
      disabled: 'none',
    }),
  ]);
};
