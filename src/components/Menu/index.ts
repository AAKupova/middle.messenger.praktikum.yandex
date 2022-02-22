import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';
import Store from '../../models/Store';

import { StoreEvents } from '../../models/Store';
 
import menu from './index.hbs';
import './index.scss';

export class Menu extends ViewBlock {
  constructor(props:object, name:string, children: ViewBlock[]) {
    super('menu', props, name, children);
    
    Store.on(StoreEvents.Updated, () => {
      this.setProps(Object.assign({}, mapUserToProps(Store.getState())));
    });
  }

  render():DocumentFragment {
    const tmp = Handlebars.compile(menu);
    return this.compile(tmp(this.props));
  }
}

function mapUserToProps(state: any) {
  const obj = JSON.parse(state.user);
  return {
    name: obj.display_name,
    status: obj.status? obj.status : 'Мой статус!',
  };
}
