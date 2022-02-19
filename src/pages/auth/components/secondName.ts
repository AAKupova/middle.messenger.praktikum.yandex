import { Field } from '../../../components/Field';

interface CreateSecondNameProps {
  validFormAuth: any;
}

export const createSecondName = ({ validFormAuth }: CreateSecondNameProps) => {
  const data = {
    name: 'second_name',
    type: 'text',
    max: '30',
    min: '2',
    required: 'required',
    autofocus: 'autofocus',
    error: 'Имя с заглавной буквы',
    patter: 'name',
    text: 'Фамилия',
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validFormAuth.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validFormAuth.isFieldValid(e);
      },
    },
  };

  return new Field(data, 'field-second-name');
};
