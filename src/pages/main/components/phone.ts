import { FieldProfile } from '../../../components/FieldProfile';

interface CreatePhoneProps {
  validFormProfile: any;
}

export const createPhone = ({ validFormProfile }: CreatePhoneProps) => {
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
    name: 'phone',
    type: 'phone',
    max: '15',
    min: '10',
    error: 'Некорректный номер телефона',
    patter: 'phone',
    text: 'Телефон',
  };

  return new FieldProfile(data, 'field-phone');
};
