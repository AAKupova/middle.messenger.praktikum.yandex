import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import message from './index.hbs';
import './index.scss';


export class Message extends ViewBlock {
  constructor(props:object, name:string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(message);
    return tmp(this.props);
  }
}