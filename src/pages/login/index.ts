import { Field }  from '../../components/Field';
import { Button } from '../../components/Button';
import { FormLogin } from '../../components/FormLogin';
import {
  dataFieldEmail,
  dataFieldPassword,
  dataButton,
  dataForm,
} from './data';

export const fieldEmail = new Field(dataFieldEmail, 'field-email');
export const fieldPassword = new Field(dataFieldPassword, 'field-password');
export const button = new Button(dataButton, 'button');

export const login = new FormLogin(dataForm, [fieldEmail,fieldPassword,button]);

