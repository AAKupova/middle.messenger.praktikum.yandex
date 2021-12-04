import * as Handlebars from 'handlebars';

import ViewBlock from '../../components/ViewBlock/ViewBlock';
import { Field } from '../../components/Field';
import { Button } from '../../components/Button';
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

import form from './index.hbs';
import './index.scss';

class FormAuth extends ViewBlock {
  constructor(props:object, children: ViewBlock[]) {
    super('div', props, 'formLogin', children);
  }

  render():HTMLElement {
    const tmp = Handlebars.compile(form);
    return this.compile(tmp(this.props));
  }
}

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

