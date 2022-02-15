import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';
import Store from '../../models/Api/Store';
import { StoreEvents } from '../../models/Api/Store';

import fieldProfile from './index.hbs';
import './index.scss';

export class FieldProfile extends ViewBlock {
  constructor(props:object, name: string) {
    super('div', props, name);


  Store.on(StoreEvents.Updated, () => {
    this.setProps(Object.assign({}, mapUserToProps(Store.getState(), this.props)));
  });
  }

  render():string {
    const tmp = Handlebars.compile(fieldProfile);
    return tmp(this.props);
  }
}

function mapUserToProps(state: any, props: any) {
  const obj = JSON.parse(state.user);
  const key = props.name;
  return {
    value: obj[key]? obj[key] : 'Добавте псевданим',
  };
}