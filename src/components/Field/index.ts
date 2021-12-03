import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import field from './index.hbs';
import './index.scss';

class Field extends ViewBlock {
  constructor(props:object, name: string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(field);
    return tmp(this.props);
  }
}

export default Field;