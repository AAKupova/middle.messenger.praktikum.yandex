import { FormAddUser } from '../../components/FormAddUser';
import UserController from '../../controllers/UserController';
import { Popup } from '../../components/Popup';
import { Validation } from '../../models/Validation';

import { createButton } from './button';
import { createLogin } from './fieldLogin';

export const createFormAddUser = (popup: Popup | null) => {
  const validForm = new Validation('.form-add-user', '.button', '.field');
  const data = {
    events: {
      submit: (e: Event) => {
        e.preventDefault();
        UserController.isValidData(e, validForm);
        UserController.userSearch();
        if(popup) {
          popup.hide();
        }
      },
    },
  };

    return new FormAddUser(data, 'form', [
      createButton({
        text: 'Найти',
        classButton: 'form-popup__button',
        disabled: 'disabled',
      }),
      createLogin({ validForm })
    ]);
};