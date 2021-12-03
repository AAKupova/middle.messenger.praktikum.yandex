import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import button from './index.hbs';
import './index.scss';

class Button extends ViewBlock {
  constructor(props:object, name:string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(button);
    return tmp(this.props);
  }
}

export default Button;