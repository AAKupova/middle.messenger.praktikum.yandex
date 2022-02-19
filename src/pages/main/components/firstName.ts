import { FieldProfile } from '../../../components/FieldProfile';

interface CreateFirstNameProps {
  validFormProfile: any;
}

export const createFirstName = ({ validFormProfile }: CreateFirstNameProps) => {
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
    name: 'first_name',
    type: 'text',
    max: '30',
    min: '2',
    error: 'Имя с заглавной буквы',
    patter: 'name',
    text: 'Имя',
  };

  return new FieldProfile(data, 'field-first-name');
};
