import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import error from './index.hbs';
import './index.scss';


export class Error extends ViewBlock {
  constructor(props:object, name:string, children: ViewBlock []) {
    super('div', props, name, children);
  }

  render():DocumentFragment {
    const tmp = Handlebars.compile(error);
    return this.compile(tmp(this.props));
  }
}