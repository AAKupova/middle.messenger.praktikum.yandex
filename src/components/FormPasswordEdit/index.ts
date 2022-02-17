import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import form from './index.hbs';
import './index.scss';

export class FormPasswordEdit extends ViewBlock {
  constructor(props:object, name:string, children?:ViewBlock[]) {
    super('div', props, name, children);
  }

  render():DocumentFragment {
      const tmp = Handlebars.compile(form);
      return this.compile(tmp(this.props));
  }
}