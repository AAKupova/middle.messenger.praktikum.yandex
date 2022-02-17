import { FieldProfile } from '../../components/FieldProfile';
import { FormProfile } from '../../components/FormProfile';
import { Button } from '../../components/Button';
import {
  dataButton,
  dataEmail,
  dataLogin,
  dataFirstName,
  dataSecondName,
  dataDisplayName,
  dataPhone,
  dataForm,
} from './data';

export const fieldSecondName = new FieldProfile(dataSecondName, 'field-second-name');
export const fieldDisplayName = new FieldProfile(dataDisplayName, 'display-name');
export const fieldFirstName = new FieldProfile(dataFirstName, 'field-first-name');
export const fieldEmail = new FieldProfile(dataEmail, 'field-email');
export const fieldLogin = new FieldProfile(dataLogin, 'field-login');
export const fieldPhone = new FieldProfile(dataPhone, 'field-phone');
export const button = new Button(dataButton, 'button');

export const formProfile = new FormProfile(
  dataForm,
  'form',
  [
    fieldDisplayName,
    fieldSecondName,
    fieldFirstName,
    fieldEmail,
    fieldLogin,
    fieldPhone,
    button,
  ]
);