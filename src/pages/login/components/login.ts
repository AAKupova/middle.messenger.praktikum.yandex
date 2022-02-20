import { Field } from '../../../components/Field';

interface CreateEmailProps {
  validForm: any;
}

export const createLogin = ({ validForm }: CreateEmailProps) => {
  const data = {
    name: 'login',
    type: 'text',
    max: '30',
    min: '2',
    error: 'Некорректный логин',
    required: 'required',
    autofocus: 'autofocus',
    patter: 'login',
    text: 'Логин',
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validForm.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validForm.isFieldValid(e);
      },
    },
  };

  return new Field(data, 'login');
};
