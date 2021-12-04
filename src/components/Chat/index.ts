import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import chat from './index.hbs';
import './index.scss';

export class Chat extends ViewBlock {
  constructor(props:object, name:string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(chat);
    return tmp(this.props);
  }
}