import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import errorField from './index.hbs';
import './index.scss';

class ErrorField extends ViewBlock {
  constructor(props:object, name: string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(errorField);
    return tmp(this.props);
  }
}

export default ErrorField;