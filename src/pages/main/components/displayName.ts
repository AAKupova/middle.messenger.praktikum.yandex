import { FieldProfile } from '../../../components/FieldProfile';

interface CreateDisplayNameProps {
  validFormProfile: any;
}

export const createDisplayName = ({ validFormProfile }: CreateDisplayNameProps) => {
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
    name: 'display_name',
    type: 'text',
    max: '20',
    min: '3',
    error: 'Некорректный псевдоним',
    patter: 'name',
    text: 'Псевдоним',
  };

  return new FieldProfile(data, 'display-name');
};
