import { FieldProfile } from '../../components/FieldProfile';
import { Field } from '../../components/Field';

export const createLogin = (props:any) => {
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
    name: 'login',
    type: 'text',
    max: '20',
    min: '3',
    error: 'Некорректный Логин',
    patter: 'login',
    text: 'Логин',
  };

  if(fieldProfile) {
    return new FieldProfile(data, 'login');
  }else{
    return new Field(data, 'login');
  }
};
