import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import fieldProfile from './index.hbs';
import './index.scss';

export class FieldProfile extends ViewBlock {
  constructor(props:object, name: string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(fieldProfile);
    return tmp(this.props);
  }
}