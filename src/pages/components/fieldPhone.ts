import { FieldProfile } from '../../components/FieldProfile';
import { Field } from '../../components/Field';

export const createPhone = (props:any) => {
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
    name: 'phone',
    type: 'phone',
    max: '15',
    min: '10',
    error: 'Некорректный номер телефона',
    patter: 'phone',
    text: 'Телефон',
  };

  if(fieldProfile) {
    return new FieldProfile(data, 'phone');
  }else{
    return new Field(data, 'phone');
  }
};
