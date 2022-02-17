import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import popup from './index.hbs';
import './index.scss';

export class Popup extends ViewBlock {
  constructor(props:object, name:string, children?:ViewBlock[]) {
    super('div', props, name, children);
  }

  render():DocumentFragment {
      const tmp = Handlebars.compile(popup);
      return this.compile(tmp(this.props));
  }
}