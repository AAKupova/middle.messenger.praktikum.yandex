import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';
import { Chat } from '../Chat';

import sidebarHBS from './index.hbs';
import './index.scss';

class Sidebar extends ViewBlock {
  constructor(props:object, name:string, children: ViewBlock[]) {
    super('sidebar', props, 'sidebar', children);
  }

  render():HTMLElement {
    const tmp = Handlebars.compile(sidebarHBS);
    return this.compile(tmp(this.props));
  }
}

export const chat = new Chat({
  name: 'Анастасия',
  isOnline: 'online',
  text: 'Привет! Как дела!?',
  count: '3',
  time: '14:40',
}, 'chat');

export const sidebar = new Sidebar({}, 'sidebar',  [chat]);