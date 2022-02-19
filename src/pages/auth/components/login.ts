import { Field } from '../../../components/Field';

interface CreateLoginProps {
  validFormAuth: any;
}

export const createLogin = ({ validFormAuth }: CreateLoginProps) => {
  const data = {
    name: 'login',
    type: 'text',
    max: '20',
    min: '3',
    required: 'required',
    autofocus: 'autofocus',
    error: 'Некорректный login',
    patter: 'login',
    text: 'Логин',
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validFormAuth.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validFormAuth.isFieldValid(e);
      },
    },
  };

  return new Field(data, 'field-login');
};
