import { Field } from '../../components/Field';
import { Button } from '../../components/Button';
import { FormAuth } from '../../components/FormAuth';
import {
  dataFieldEmail,
  dataFieldLogin,
  dataFieldFirstName,
  dataFieldSecondName,
  dataFieldPhone,
  dataFieldPassword,
  dataFieldSecondPassword,
  dataButton,
  dataForm
} from './data';

export const fieldEmail = new Field(dataFieldEmail, 'field-email');
export const fieldLogin = new Field(dataFieldLogin, 'field-login');
export const fieldFirstName = new Field(dataFieldFirstName, 'field-first-name');
export const fieldSecondName = new Field(dataFieldSecondName, 'field-second-name');
export const fieldPhone = new Field(dataFieldPhone, 'field-phone');
export const fieldPassword = new Field(dataFieldPassword, 'field-password');
export const fieldSecondPassword = new Field(dataFieldSecondPassword, 'field-second-password');
export const button = new Button(dataButton, 'button');

export const auth = new FormAuth(
  dataForm,
  [ 
    fieldEmail,
    fieldLogin,
    fieldFirstName,
    fieldSecondName,
    fieldPhone,
    fieldPassword,
    fieldSecondPassword,
    button,
  ]
);

