import { Field } from '../../../components/Field';

interface CreatePasswordProps {
  validFormLogin: any;
}

export const createPassword = ({ validFormLogin }: CreatePasswordProps) => {
  const dataFieldPassword = {
    name: 'password',
    type: 'password',
    max: '40',
    min: '8 ',
    required: 'required',
    autofocus: 'autofocus',
    patter: 'password',
    error: 'Пароль не меньше 8 символов',
    text: 'Пароль',
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validFormLogin.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validFormLogin.isFieldValid(e);
      },
    },
  };

  return new Field(dataFieldPassword, 'field-password');
};
