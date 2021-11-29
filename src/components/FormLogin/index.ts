import * as Handlebars from 'handlebars';

import ViewBlock from '../../components/ViewBlock/ViewBlock';

import form from './index.hbs';
import './index.scss';

export class FormLogin extends ViewBlock {
  constructor(props:object, children: ViewBlock[]) {
    super('div', props, 'formLogin', children);
  }

  render():DocumentFragment {
    const tmp = Handlebars.compile(form);
    return this.compile(tmp(this.props));
  }
}
