import { FieldProfile } from '../../../components/FieldProfile';

interface CreateEmailProps {
  validFormProfile: any;
}

export const createEmail = ({ validFormProfile }: CreateEmailProps) => {
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
    name: 'email',
    type: 'email',
    max: '30',
    min: '2',
    error: 'Некорректный адрес почты',
    patter: 'email',
    text: 'Почта',
  };

  return new FieldProfile(data, 'field-email');
};
