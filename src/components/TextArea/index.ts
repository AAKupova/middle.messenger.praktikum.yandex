import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import textArea from './index.hbs';
import './index.scss';


export class TextArea extends ViewBlock {
  constructor(props:object, name:string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(textArea);
    return tmp(this.props);
  }
}