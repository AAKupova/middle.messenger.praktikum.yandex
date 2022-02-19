import { FieldProfile } from '../../../components/FieldProfile';

interface createSecondNameProps {
  validFormProfile: any;
}

export const createSecondName = ({
  validFormProfile,
}: createSecondNameProps) => {
  const data = {
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validFormProfile.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validFormProfile.isFieldValid(e);
      },
    },
    required: 'required',
    autofocus: 'autofocus',
    name: 'second_name',
    type: 'text',
    max: '30',
    min: '2',
    error: 'Имя с заглавной буквы',
    patter: 'name',
    text: 'Фамилия',
  };

  return new FieldProfile(data, 'field-second-name');
};
