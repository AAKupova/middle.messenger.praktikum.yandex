import { Field } from '../../../components/Field';

interface CreateFirstNameProps {
  validFormAuth: any;
}

export const createFirstName = ({ validFormAuth }: CreateFirstNameProps) => {
  const data = {
    name: 'first_name',
    type: 'text',
    max: '30',
    min: '2',
    required: 'required',
    autofocus: 'autofocus',
    error: 'Имя с заглавной буквы',
    patter: 'name',
    text: 'Имя',
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validFormAuth.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validFormAuth.isFieldValid(e);
      },
    },
  };

  return new Field(data, 'field-first-name');
};
