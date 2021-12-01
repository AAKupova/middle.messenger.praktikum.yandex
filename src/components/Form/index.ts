import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock'

import form from './index.hbs';
import './index.scss';

class Form extends ViewBlock {
  constructor(props:object) {
    super("div", props);
  }

  render():string {
    const tmp = Handlebars.compile(form);
    return tmp(this.props);
  }
}

export default Form;