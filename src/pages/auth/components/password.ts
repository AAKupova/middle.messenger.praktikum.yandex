import { Field } from '../../../components/Field';

interface CreatePasswordProps {
  validFormAuth: any;
}

export const createPassword = ({ validFormAuth }: CreatePasswordProps) => {
  const data = {
    name: 'password',
    type: 'password',
    max: '40',
    min: '8',
    required: 'required',
    autofocus: 'autofocus',
    error: 'Пароль не меньше 8 символов',
    patter: 'password',
    text: 'Пароль',
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validFormAuth.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validFormAuth.isFieldValid(e);
      },
    },
  };

  return new Field(data, 'field-password');
};
