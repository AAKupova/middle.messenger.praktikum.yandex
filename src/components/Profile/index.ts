import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import profile from './index.hbs';
import './index.scss';

export class Profile extends ViewBlock {
  constructor(props:object, name:string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(profile);
    return tmp(this.props);
  }
}