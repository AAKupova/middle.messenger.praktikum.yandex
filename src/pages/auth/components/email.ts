import { Field } from '../../../components/Field';

interface CreateEmailProps {
  validFormAuth: any;
}

export const createEmail = ({ validFormAuth }: CreateEmailProps) => {
  const data = {
    name: 'email',
    type: 'email',
    max: '30',
    min: '2',
    required: 'required',
    autofocus: 'autofocus',
    error: 'Некорректный e-mail',
    patter: 'email',
    text: 'Почта',
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validFormAuth.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validFormAuth.isFieldValid(e);
      },
    },
  };

  return new Field(data, 'field-email');
};
