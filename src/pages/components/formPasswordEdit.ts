import UserController from '../../controllers/UserController';

import { FormPasswordEdit } from '../../components/FormPasswordEdit';
import { createPassword } from './fieldPassword';
import { Validation } from '../../models/Validation';
import { createButton } from './button';
import { Popup } from '../../components/Popup';

export const createFormPasswordEdit = (popup: Popup | null) => {
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

  return new FormPasswordEdit(data, 'form', [
    createButton({
      text: 'Сохранить',
      classButton: 'form-popup__button',
      disabled: 'disabled',
    }),
    createPassword({ validForm, name: 'oldPassword', text: 'Старый пароль' }),
    createPassword({ validForm, name: 'newPassword', text: 'Новый пароль' }),
  ]);
};
