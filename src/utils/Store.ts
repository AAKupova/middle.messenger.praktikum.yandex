import { set } from './set';
import { EventBus } from './EventBus';

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus{
  state: unknown = {};

  getState() {
    return this.state;
  }

  set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store(); 