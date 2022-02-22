import * as Handlebars from 'handlebars';

import avatarImg from '../../../static/images/default-avatar.svg';

import ViewBlock from '../ViewBlock/ViewBlock';
import Store from '../../models/Store';

import { StoreEvents } from '../../models/Store';

import avatar from './index.hbs';
import './index.scss';

export class Avatar extends ViewBlock {
  constructor(props: object, name: string, children?: ViewBlock[]) {
    super('div', props, name, children);

    Store.on(StoreEvents.Updated, () => {
      this.setProps(Object.assign({}, mapUserToProps(Store.getState())));
    });
  }

  render(): DocumentFragment | string {
    if (this.children) {
      const tmp = Handlebars.compile(avatar);
      return this.compile(tmp(this.props));
    } else {
      const tmp = Handlebars.compile(avatar);
      return tmp(this.props);
    }
  }
}

function mapUserToProps(state: any) {
  const { avatar } = JSON.parse(state.user);
  const urlImg = `https://ya-praktikum.tech/api/v2/resources${avatar}`;
  return {
    avatar: avatar ? urlImg : avatarImg,
  };
}