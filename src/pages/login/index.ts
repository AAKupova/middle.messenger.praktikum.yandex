import * as Handlebars from 'handlebars';

import ViewBlock from '../../components/ViewBlock/ViewBlock';
import { Field }  from '../../components/Field';
import { Button } from '../../components/Button';
import {
  dataFieldEmail,
  dataFieldPassword,
  dataButton,
  dataForm,
} from './data';

import form from './index.hbs';
import './index.scss';

class FormLogin extends ViewBlock {
  constructor(props:object, children: ViewBlock[]) {
    super('div', props, 'formLogin', children);
  }

  render():HTMLElement {
    const tmp = Handlebars.compile(form);
    return this.compile(tmp(this.props));
  }
}

export const fieldEmail = new Field(dataFieldEmail, 'field-email');

export const fieldPassword = new Field(dataFieldPassword, 'field-password');

export const button = new Button(dataButton, 'button');

export const login = new FormLogin(dataForm, [fieldEmail,fieldPassword,button]);

