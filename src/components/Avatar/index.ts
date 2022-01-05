import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';

import avatar from './index.hbs';
import './index.scss';

export class Avatar extends ViewBlock {
  constructor(props:object, name:string, children?:ViewBlock[]) {
    super('div', props, name, children);
  }

  render():DocumentFragment | string {
    if(this.children){
      const tmp = Handlebars.compile(avatar);
      return this.compile(tmp(this.props));
    }else{
      const tmp = Handlebars.compile(avatar);
      return tmp(this.props);
    }
  }
}