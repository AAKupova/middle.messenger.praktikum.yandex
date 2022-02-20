import { FormPasswordEdit } from '../../../components/FormPasswordEdit';
import UserController from '../../../controllers/UserController';
import { Popup } from '../../../components/Popup';
import { Validation } from '../../../models/Validation';

import { createPopupButton } from './popupButton';
import { createOldPassword } from './oldPassword';
import { createNewPassword } from './newPassword';

export const createFormPasswordEdit = (popup: Popup | null) => {
  const validFormPopupEdit = new Validation('.form-password-edit', '.button', '.field');
  const data = {
    events: {
      submit: (e: Event) => {
        e.preventDefault();
        console.log(e.target);
        UserController.isValidData(e, validFormPopupEdit);
        UserController.editPassword();
        if(popup) {
          popup.hide();
        }
      },
    },
  };

  return new FormPasswordEdit(data, 'form-password-edit', [
    createPopupButton(),
    createOldPassword({ validFormPopupEdit }),
    createNewPassword({ validFormPopupEdit }),
  ]);
};
