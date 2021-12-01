import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock'

import button from './index.hbs';
import './index.scss';

class Button extends ViewBlock {
  constructor(props:object) {
    super("div", props);
  }

  render():string {
    const tmp = Handlebars.compile(button);
    return tmp(this.props);
  }
}

export default Button;