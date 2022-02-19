import { Field } from '../../../components/Field';

interface CreateOldPasswordProps {
  validFormPopupEdit: any;
}

export const createOldPassword = ({ validFormPopupEdit }: CreateOldPasswordProps) => {
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
    name: 'oldPassword',
    type: 'password',
    max: '40',
    min: '8',
    error: 'Пароль не меньше 8 символов',
    patter: 'password',
    text: 'Старый пароль',
  };

  return new Field(data, 'oldPassword');
};
