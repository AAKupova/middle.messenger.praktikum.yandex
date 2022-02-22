import { FieldProfile } from '../../components/FieldProfile';
import { Field } from '../../components/Field';

export const createFirstName = (props:any) => {
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
    name: 'first_name',
    type: 'text',
    max: '30',
    min: '2',
    error: 'Имя с заглавной буквы',
    patter: 'name',
    text: 'Имя',
  };
  if(fieldProfile) {
    return new FieldProfile(data, 'first-name');
  }else{
    return new Field(data, 'first-name');
  }
};
