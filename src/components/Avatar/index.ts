import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import avatar from './index.hbs';
import './index.scss';

export class Avatar extends ViewBlock {
  constructor(props:object, name:string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(avatar);
    return tmp(this.props);
  }
}