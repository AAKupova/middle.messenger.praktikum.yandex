import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import sidebar from './index.hbs';
import './index.scss';

export class Sidebar extends ViewBlock {
  constructor(props:object, name:string, children: ViewBlock[]) {
    super('sidebar', props, name, children);
  }

  render():DocumentFragment {
    const tmp = Handlebars.compile(sidebar);
    return this.compile(tmp(this.props));
  }
}
