import { FieldProfile } from '../../components/FieldProfile';
import { Field } from '../../components/Field';

export const createEmail = (props: any) => {
  const { validForm, fieldProfile = false } = props;
  const data = {
    events: {
      focusin: (e: { target: HTMLInputElement }) => {
        validForm.isErrorStatusField(e);
      },
      focusout: (e: { target: HTMLInputElement }) => {
        validForm.isFieldValid(e);
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

  if (fieldProfile) {
    return new FieldProfile(data, 'email');
  } else {
    return new Field(data, 'email');
  }
};
