import * as Handlebars from 'handlebars';

import urlImg from '../../../static/images/default-avatar.svg';

import ViewBlock from '../ViewBlock/ViewBlock';
import Store from '../../models/Store';

import { StoreEvents } from '../../models/Store';
import { UserData } from '../../types/type';
import { CardUser } from '../CardUser';
import { Avatar } from '../Avatar';

import popup from './index.hbs';
import './index.scss';

export class Popup extends ViewBlock {
  constructor(props: object, name: string, children?: ViewBlock[]) {
    super('div', props, name, children);

    if(props.user) {
      Store.on(StoreEvents.Updated, () => {
        const state: any = Store.getState();
        const stateUsers = state.users;
  
        if (typeof stateUsers === 'string') {
          children?.push(createCard(stateUsers));
        }
        this.setProps(Object.assign({}, stateUsers));
      });
    }
  }

  render(): DocumentFragment {
    const tmp = Handlebars.compile(popup);
    return this.compile(tmp(this.props));
  }
}

function createCard(state: string) {
  return JSON.parse(state).map((item: UserData) => {
    let avatar: any;

    const data = {
      ...item,
      events: {
        click: () => {
          Store.set('chats', item);
        },
      },
    };

    if (item.avatar) {
      avatar = `https://ya-praktikum.tech/api/v2/resources${item.avatar}`;
    } else {
      avatar = urlImg;
    }
    
    const avatarChat = new Avatar(
      {avatar, size: 'avatar__img_size_m' },
      'avatar'
    );

    return new CardUser(data, 'card', [avatarChat]);
  });
}
// function mapUserToProps(state: any) {
//   return JSON.parse(state);
// }