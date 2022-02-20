import { Field } from '../../../components/Field';

interface CreatePasswordProps {
  validForm: any;
}

export const createPassword = ({ validForm }: CreatePasswordProps) => {
  const data = {
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
        validForm.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validForm.isFieldValid(e);
      },
    },
  };

  return new Field(data, 'field-password');
};
