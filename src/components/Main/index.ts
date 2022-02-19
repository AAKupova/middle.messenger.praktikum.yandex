import * as Handlebars from 'handlebars';

import ViewBlock from '../../components/ViewBlock/ViewBlock';

import main from './index.hbs';
import './index.scss';

export class PageMain extends ViewBlock {
  constructor(props: object, children: ViewBlock[]) {
    super('div', props, 'formLogin', children);
  }

  render(): DocumentFragment {
    const tmp = Handlebars.compile(main);
    return this.compile(tmp(this.props));
  }
}
