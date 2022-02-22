import { FieldProfile } from '../../components/FieldProfile';
import { Field } from '../../components/Field';

export const createDisplayName = (props:any) => {
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
    name: 'display_name',
    type: 'text',
    max: '20',
    min: '3',
    error: 'Некорректный псевдоним',
    patter: 'name',
    text: 'Псевдоним',
  };

  if(fieldProfile) {
    return new FieldProfile(data, 'display-name');
  }else{
    return new Field(data, 'display-name');
  }
};
