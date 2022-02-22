import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';
// import Store from '../../models/Store';
// import { StoreEvents } from '../../models/Store';

import chat from './index.hbs';
import './index.scss';

export class Chat extends ViewBlock {
  constructor(props:object, name:string, children: ViewBlock []) {
    super('div', props, name, children);
    // Store.on(StoreEvents.Updated, () => {
    //   this.setProps(Object.assign({}, mapUserToProps(Store.getState())));
    // });
  }

  render():DocumentFragment {
    const tmp = Handlebars.compile(chat);
    return this.compile(tmp(this.props));
  }
}

// function mapUserToProps(state: any) {
//   const obj = JSON.parse(state.user);
//   return {
//     login: obj.login,
//     email: obj.email,
//   };
// }