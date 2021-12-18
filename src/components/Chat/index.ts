import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import chat from './index.hbs';
import './index.scss';

export class Chat extends ViewBlock {
  constructor(props:object, name:string, children: ViewBlock []) {
    super('div', props, name, children);
  }

  render():DocumentFragment {
    const tmp = Handlebars.compile(chat);
    return this.compile(tmp(this.props));
  }
}