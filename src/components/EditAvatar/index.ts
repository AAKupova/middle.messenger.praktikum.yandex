import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';
import editAvatar from './index.hbs';
import './index.scss';

export default editAvatar;

export class EditAvatar extends ViewBlock {
  constructor(props:object, name:string) {
    super('div', props, name);
  }

  render():string {
    const tmp = Handlebars.compile(editAvatar);
    return tmp(this.props);
  }
}