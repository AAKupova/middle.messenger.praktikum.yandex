import { Field } from '../../../components/Field';

interface CreatePhoneProps {
  validFormAuth: any;
}

export const createPhone = ({ validFormAuth }: CreatePhoneProps) => {
  const data = {
    name: 'phone',
    type: 'phone',
    max: '15',
    min: '10',
    required: 'required',
    autofocus: 'autofocus',
    error: 'Некорректный номер телефона',
    patter: 'phone',
    text: 'Телефон',
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validFormAuth.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validFormAuth.isFieldValid(e);
      },
    },
  };

  return new Field(data, 'field-phone');
};
