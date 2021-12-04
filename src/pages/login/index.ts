import * as Handlebars from 'handlebars';

import ViewBlock from '../../components/ViewBlock/ViewBlock';
import Field from '../../components/Field';
import Button from '../../components/Button';
import ErrorField from '../../components/ErrorField';

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

const fieldName = new Field(
  {
    name: 'email',
    type: 'email',
    max: '30',
    min: '2',
    required: 'required',
    autofocus: 'autofocus',
  },
  'field-name',
);

const errorFieldName = new ErrorField(
  {
    error: 'Пользователя с этой почтой не найдено'
  },
  'error-field-name',
);

const fieldPassword = new Field({
  name: 'password',
  type: 'password',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
},
'field-password',
);

const errorFieldPassword= new ErrorField(
  {
    error: 'Пароль не верный'
  },
  'error-field-password',
);


export const button = new Button({
  text: 'Войти',
  classButton: 'form__button',
  events: {
    click: (e: Event) => {
      console.log(e.target);
    }
  },
},
'button'
);

export const formLogin = new FormLogin({
  title: 'Войти',
  link: 'Зарегестрироватся',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      console.log(e.target);
    }
  },
  
},

[fieldName, errorFieldName, fieldPassword, errorFieldPassword, button]
);

