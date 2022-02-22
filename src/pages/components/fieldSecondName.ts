import { FieldProfile } from '../../components/FieldProfile';
import { Field } from '../../components/Field';

export const createSecondName = (props:any) => {
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
    name: 'second_name',
    type: 'text',
    max: '30',
    min: '2',
    error: 'Имя с заглавной буквы',
    patter: 'name',
    text: 'Фамилия',
  };

  if(fieldProfile) {
    return new FieldProfile(data, 'second-name');
  }else{
    return new Field(data, 'second-name');
  }
};
