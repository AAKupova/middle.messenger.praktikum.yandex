import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import header from './index.hbs';
import './index.scss';


export class Header extends ViewBlock {
  constructor(props:object, name:string, children: ViewBlock []) {
    super('div', props, name, children);
  }

  render():DocumentFragment {
    const tmp = Handlebars.compile(header);
    return this.compile(tmp(this.props));
  }
}