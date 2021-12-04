import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import sidebar from './index.hbs';
import './index.scss';

export class Sidebar extends ViewBlock {
  constructor(props:object, name:string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(sidebar);
    return tmp(this.props);
  }
}