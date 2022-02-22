import UserController from '../../controllers/UserController';
import AuthController from '../../controllers/AuthController';

import { createDisplayName } from './fieldDisplayName';
import { createSecondName } from './fieldSecondName';
import { createFirstName } from './fieldFirstName';
import { FormProfile } from '../../components/FormProfile';
import { createEmail } from './fieldEmail';
import { createLogin } from './fieldLogin';
import { createPhone } from './fieldPhone';
import { Validation } from '../../models/Validation';
import { createButton } from './button';
import { Popup } from '../../components/Popup';

interface CreateFormProps {
  popup: Popup;
}

export const createForm = ({ popup }: CreateFormProps) => {
  const validForm = new Validation('.form-profile', '.button', '.field');
  const data = {
    events: {
      submit: (e: Event) => {
        e.preventDefault();
        UserController.isValidData(e, validForm);
        UserController.editProfile();
      },
      click: (e: Event) => {
        const edit = document.querySelector('.block-edit');
        const exit = document.querySelector('.block-exit');

        if (e.target === edit) {
          popup.show();
        }

        if (e.target === exit) {
          AuthController.logout();
        }
      },
    },
  };

  return new FormProfile(data, 'form', [
    createDisplayName({ validForm, fieldProfile: true }),
    createSecondName({ validForm, fieldProfile: true }),
    createFirstName({ validForm, fieldProfile: true }),
    createEmail({ validForm, fieldProfile: true }),
    createLogin({ validForm, fieldProfile: true }),
    createPhone({ validForm, fieldProfile: true }),
    createButton({
      text: 'Сохронить',
      classButton: 'form-profile__button',
      disabled: 'disabled',
    }),
  ]);
};
