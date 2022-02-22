import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import card from './index.hbs';
import './index.scss';

export class CardUser extends ViewBlock {
  constructor(props:object, name:string, children?:ViewBlock[]) {
    super('div', props, name, children);
  }

  render():DocumentFragment {
      const tmp = Handlebars.compile(card);
      return this.compile(tmp(this.props));
  }
}