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

    Store.on(StoreEvents.Updated, () => {
      const state: any = Store.getState();
      const stateUsers = state.users;
      if (typeof stateUsers === 'string') {
        children?.push(mapUserToProps(stateUsers));
      }
      this.setProps(Object.assign({}, Store.getState()));
    });
  }

  render(): DocumentFragment {
    const tmp = Handlebars.compile(popup);
    return this.compile(tmp(this.props));
  }
}

function mapUserToProps(state: any) {
  return JSON.parse(state).map((item: UserData) => {
    let avatar: any;

    if (item.avatar) {
      avatar = `https://ya-praktikum.tech/api/v2/resources${item.avatar}`;
    } else {
      avatar = urlImg;
    }
    
    const avatarChat = new Avatar(
      {avatar, size: 'avatar__img_size_m' },
      'avatar'
    );

    return new CardUser(item, 'card', [avatarChat]);
  });
}
