import { Button } from '../../components/Button';
import { FormProfile } from '../../components/FormProfile';
import { FieldProfile } from '../../components/FieldProfile';
import {
  dataButton,
  dataFieldEmail,
  dataFieldLogin,
  dataFieldFirstName,
  dataFieldSecondName,
  dataFieldDisplayName,
  dataFieldPhone,
  dataFieldCity,
  dataForm,
} from './data';

export const fieldProfileEmail = new FieldProfile(
  dataFieldEmail,
  'field-email'
);

export const fieldProfileFirstName = new FieldProfile(
  dataFieldFirstName,
  'field-first-name'
);

export const fieldProfileLogin = new FieldProfile(
  dataFieldLogin,
  'field-login'
);

export const fieldProfileCity = new FieldProfile(
  dataFieldCity,
  'field-city'
);

export const fieldProfileSecondName = new FieldProfile(
  dataFieldSecondName,
  'field-second-name'
);

export const fieldProfileDisplayName = new FieldProfile(
  dataFieldDisplayName,
  'display-name'
);

export const fieldProfilePhone = new FieldProfile(
  dataFieldPhone,
  'field-phone'
);

export const button = new Button(dataButton, 'button');

export const formProfile = new FormProfile(
  dataForm,
  'form',
  [
    button,
    fieldProfileEmail,
    fieldProfileFirstName,
    fieldProfileLogin,
    fieldProfileCity,
    fieldProfileSecondName,
    fieldProfileDisplayName,
    fieldProfilePhone,
  ]
);