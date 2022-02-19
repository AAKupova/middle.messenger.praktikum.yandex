import { FormPasswordEdit } from '../../../components/FormPasswordEdit';
import UserController from '../../../controllers/UserController';
import { Validation } from '../../../models/Validation';

import { createPopupButton } from './popupButton';
import { createOldPassword } from './oldPassword';
import { createNewPassword } from './newPassword';

export const createFormPasswordEdit = () => {
  const validFormPopupEdit = new Validation('.form-password-edit', '.button', '.field');
  const data = {
    events: {
      submit: (e: Event) => {
        e.preventDefault();
        console.log(e.target);
        UserController.isValidData(e, validFormPopupEdit);
        UserController.editPassword();
      },
    },
  };

  return new FormPasswordEdit(data, 'form-password-edit', [
    createPopupButton(),
    createOldPassword({ validFormPopupEdit }),
    createNewPassword({ validFormPopupEdit }),
  ]);
};
