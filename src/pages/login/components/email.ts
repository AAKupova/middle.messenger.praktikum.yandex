import { Field } from '../../../components/Field';

interface CreateEmailProps {
  validFormLogin: any;
}

export const createEmail = ({ validFormLogin }: CreateEmailProps) => {
  const dataFieldEmail = {
    name: 'login',
    type: 'text',
    max: '30',
    min: '2',
    error: 'Некорректный e-mail',
    required: 'required',
    autofocus: 'autofocus',
    patter: 'login',
    text: 'Логин',
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validFormLogin.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validFormLogin.isFieldValid(e);
      },
    },
  };

  return new Field(dataFieldEmail, 'field-email');
};
