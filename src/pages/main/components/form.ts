import { FormProfile } from '../../../components/FormProfile';
import UserController from '../../../controllers/UserController';
import AuthController from '../../../controllers/AuthController';
import { Popup } from '../../../components/Popup';
import { Validation } from '../../../models/Validation';

import { createDisplayName } from './displayName';
import { createSecondName } from './secondName';
import { createFirstName } from './firstName';
import { createEmail } from './email';
import { createLogin } from './login';
import { createPhone } from './phone';
import { createButton } from './button';

interface CreateFormProps {
  popup: Popup;
}

export const createForm = ({ popup }: CreateFormProps) => {
  const validFormProfile = new Validation('.form-profile', '.button', '.field');
  const data = {
    events: {
      submit: (e: Event) => {
        e.preventDefault();
        UserController.isValidData(e, validFormProfile);
        UserController.editProfile();
      },
      click: (e: Event) => {
        const editIcon = document.querySelector('.form-profile__icon-edit');
        const editText = document.querySelector('.form-profile__text-edit');
        const exitText = document.querySelector('.form-profile__text-exit');
        const exitIcon = document.querySelector('.form-profile__icon-exit');

        if (e.target === editIcon || e.target === editText) {
          popup.show();
        }

        if (e.target === exitText || e.target === exitIcon) {
          AuthController.logout();
        }
      },
    },
  };

  return new FormProfile(data, 'form', [
    createDisplayName({ validFormProfile }),
    createSecondName({ validFormProfile }),
    createFirstName({ validFormProfile }),
    createEmail({ validFormProfile }),
    createLogin({ validFormProfile }),
    createPhone({ validFormProfile }),
    createButton(),
  ]);
};
