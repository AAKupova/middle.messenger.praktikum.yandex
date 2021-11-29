import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import profile from './index.hbs';
import './index.scss';

export class Profile extends ViewBlock {
  constructor(props:object, name:string, children:ViewBlock[]) {
    super('div', props, name, children);
  }

  render():DocumentFragment {
    const tmp = Handlebars.compile(profile);
    return this.compile(tmp(this.props));
  }
}