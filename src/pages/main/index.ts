import * as Handlebars from 'handlebars';

import ViewBlock from '../../components/ViewBlock/ViewBlock';
import { Header } from '../../components/Header';
import { sidebar } from '../../components/Sidebar';
import { TextArea } from '../../components/TextArea';
import { Message } from '../../components/Message';
import { menuPage } from '../../components/Menu';

import main from './index.hbs';
import './index.scss';

class PageMain extends ViewBlock {
  constructor(props: object, children: ViewBlock[]) {
    super('div', props, 'formLogin', children);
  }

  render(): HTMLElement {
    const tmp = Handlebars.compile(main);
    return this.compile(tmp(this.props));
  }
}

export const header = new Header({ name: 'Анастасия', isOnline: 'Online' }, 'header');
export const textArea = new TextArea({}, 'text-area');
export const message = new Message({
  text: 'JavaScript — мультипарадигменный',
  time: '12:30'
}, 'message');

menuPage.hide();
export const pageMain = new PageMain(
  {},
  [sidebar, header, textArea, message, menuPage ]
);

