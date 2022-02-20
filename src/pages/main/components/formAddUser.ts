import { FormAddUser } from '../../../components/FormAddUser';
import UserController from '../../../controllers/UserController';
import { Popup } from '../../../components/Popup';
import { Validation } from '../../../models/Validation';

import { createButton } from '../../components/button';
import { createLogin } from '../../login/components/login';

export const createFormAddUser = (popup: Popup | null) => {
  const validForm = new Validation('.form-password-edit', '.button', '.field');
  const data = {
    events: {
      submit: (e: Event) => {
        e.preventDefault();
        console.log(e.target);
        UserController.isValidData(e, validForm);
        UserController.editPassword();
        if(popup) {
          popup.hide();
        }
      },
    },
  };

  return new FormAddUser(data, 'form', [
    createButton({
      text: 'Добавить',
      classButton: 'form-popup__button',
      disabled: 'disabled',
    }),
    createLogin({ validForm })
  ]);
};