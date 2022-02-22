import { Field } from '../../components/Field';

interface CreatePasswordProps {
  validForm: any;
  name: string;
  text?: string;
}

export const createPassword = ({ validForm, name, text}: CreatePasswordProps) => {
  const data = {
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validForm.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validForm.isFieldValid(e);
      },
    },
    name,
    text,
    required: 'required',
    autofocus: 'autofocus',
    type: 'password',
    max: '40',
    min: '8',
    error: 'Пароль не меньше 8 символов',
    patter: 'password',
  };

  return new Field(data, name);
};
