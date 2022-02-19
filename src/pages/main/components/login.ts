import { FieldProfile } from '../../../components/FieldProfile';

interface CreateLoginProps {
  validFormProfile: any;
}

export const createLogin = ({ validFormProfile }: CreateLoginProps) => {
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
    name: 'login',
    type: 'text',
    max: '20',
    min: '3',
    error: 'Некорректный Логин',
    patter: 'login',
    text: 'Логин',
  };

  return new FieldProfile(data, 'field-login');
};
