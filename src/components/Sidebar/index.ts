import * as Handlebars from 'handlebars';
import urlImg from '../../../static/images/default-avatar.svg';

import ViewBlock from '../ViewBlock/ViewBlock';
import Store from '../../models/Store';

import { StoreEvents } from '../../models/Store';
import { UserData } from '../../types/type';
import { Chat } from '../Chat';
import { Avatar } from '../Avatar';

import sidebar from './index.hbs';
import './index.scss';

export class Sidebar extends ViewBlock {
  constructor(props: object, name: string, children: ViewBlock[]) {
    super('sidebar', props, name, children);

    Store.on(StoreEvents.Updated, () => {
      const state: any = Store.getState();
      const stateChats = state.chats;

      if (stateChats) {
        children?.push(createChat(stateChats));
      }
      this.setProps(Object.assign({}, Store.getState()));
    });
  }

  render(): DocumentFragment {
    const tmp = Handlebars.compile(sidebar);
    return this.compile(tmp(this.props));
  }
}

function createChat(state: UserData) {
  let avatar: any;

  console.log(state);

  if (state.avatar) {
    avatar = `https://ya-praktikum.tech/api/v2/resources${state.avatar}`;
  } else {
    avatar = urlImg;
  }

  const avatarChat = new Avatar(
    { avatar },
    'avatar'
  );

  return new Chat(state, 'chat', [avatarChat]);
}

// function mapUserToProps(state) {
//  return
// }
