import { Field } from '../../../components/Field';

interface createNewPasswordProps {
  validFormPopupEdit: any;
}

export const createNewPassword = ({
  validFormPopupEdit,
}: createNewPasswordProps) => {
  const data = {
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validFormPopupEdit.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validFormPopupEdit.isFieldValid(e);
      },
    },
    required: 'required',
    autofocus: 'autofocus',
    name: 'newPassword',
    type: 'password',
    max: '40',
    min: '8',
    error: 'Пароль не меньше 8 символов',
    patter: 'password',
    text: 'Новый пароль',
  };

  return new Field(data, 'newPassword');
};
