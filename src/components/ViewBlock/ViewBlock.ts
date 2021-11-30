import { EventBus } from '../../utils/EventBus';

interface Props {
  events?: Object;
}

export default class ViewBlock {
  static EVENTS = {
    INIT: "init",
    PROPS_MUTATION: "mutation",
    RENDER: "render"
  };

  eventBus: () => any;
  tagName: string;
  props: Props;
  _element: HTMLElement;

  constructor(tagName:string, props:object) {
    const eventBus = new EventBus();
    this.tagName = tagName;
    this.props = props;
    
    this.eventBus = () => eventBus;
    this.props = this._makePropsProxy(props);
    this._registerEvents();
  }

  _registerEvents() {
    this.eventBus().on(ViewBlock.EVENTS.RENDER, this._render.bind(this));
    this.eventBus().emit(ViewBlock.EVENTS.PROPS_MUTATION, this.didUpdate.bind(this));
    this.eventBus().on(ViewBlock.EVENTS.INIT, this.init.bind(this));
  }

  _createElement() {
    this._element = document.createElement(this.tagName);
  }

  init() {
    this. _createElement();
    this.eventBus().emit(ViewBlock.EVENTS.RENDER);
  }

  _render() {
    const block = this.render();

    this._removeEvents();
    // this._element.innerHTML = block;
    this._addEvents();
  }

  render() {}

  _addEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  didUpdate(oldProps:object, newProps:object) {
    if (oldProps === newProps) {
      this.eventBus().emit(ViewBlock.EVENTS.RENDER)
    }
  }

  setProps = (nextProps:object) => {
    if (!nextProps) {
      return;
    }
    
    const oldProps = this.props;
    this.props = Object.assign(this.props, nextProps);

    this.eventBus().emit(ViewBlock.EVENTS.PROPS_MUTATION, oldProps, this.props)
  };

  getElement() {
    return this._element;
  }

  _makePropsProxy(props:object) {
    const proxyProps = new Proxy(props, {
    get(target, prop:string) {
      if(prop.indexOf('_') === 0){
         throw new Error('Нет прав');
      }
       const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
    },

    set(target, prop:string, val) {
      if(prop.indexOf('_') === 0){
         throw new Error('Нет прав');
      }else{
        target[prop] = val;
        return true;
      }
    },

    deleteProperty() {
        throw new Error("нет доступа");
    },
  });

    return proxyProps;
  }

  show() {
    this._element.style.display = "block";
  }

  hide() {
    this._element.style.display = "none";
  }

}