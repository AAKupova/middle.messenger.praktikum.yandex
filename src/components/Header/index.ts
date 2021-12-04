import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import header from './index.hbs';
import './index.scss';


export class Header extends ViewBlock {
  constructor(props:object, name:string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(header);
    return tmp(this.props);
  }
}