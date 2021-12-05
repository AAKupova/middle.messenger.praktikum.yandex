import * as Handlebars from 'handlebars';

import ViewBlock from '../../components/ViewBlock/ViewBlock';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Chat } from '../../components/Chat';
import { TextArea } from '../../components/TextArea';
import { Message } from '../../components/Message';
import { Menu } from '../../components/Menu';
import { Profile } from '../../components/Profile';
import { Button } from '../../components/Button';

import main from './index.hbs';
import './index.scss';

class PageMain extends ViewBlock {
  constructor(props: object, children: ViewBlock[]) {
    super('div', props, 'formLogin', children);
  }

  render():DocumentFragment {
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



export const chat = new Chat({
  name: 'Анастасия',
  isOnline: 'online',
  text: 'Привет! Как дела!?',
  count: '3',
  time: '14:40',
}, 'chat');

export const sidebar = new Sidebar({}, 'sidebar', [chat]);

export const button = new Button({text: 'Сохронить'}, 'button');

export const profile = new Profile({
  email: 'aa.kupova@gmail.com',
  login: 'aa.kupova',
  name: 'Анастасия',
  surname: 'Купова',
  nickname: 'Анастасия',
  city: 'Москва',
  telephone: '123345677'
},
 'profile',
 [button]);

export const menu = new Menu({ name: 'Анастасия', city: 'Москва' },
  'menu',
  [profile]
);

menu.hide();
profile.hide();

export const pageMain = new PageMain(
  {},
  [sidebar, header, textArea, message, menu]
);

