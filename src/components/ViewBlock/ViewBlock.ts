import { EventBus } from '../../utils/EventBus';
import { v4 as makeUUID } from 'uuid';

interface Props {
  events?: Object;
  settings?:{
    withInternalID: boolean;
  };
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
  children: object;
  settings: boolean;
  _id: string;

  constructor(tagName:string, propsAndChildren = {}) {
    const { children, props } = this._getChildren(propsAndChildren);
    const eventBus = new EventBus();
    this.tagName = tagName;
    this.props = props;
    this.settings = this.props.settings!.withInternalID;

    this.children = children;

    this._id = makeUUID();
    this.props = this._makePropsProxy({ ...props, _id: this._id });
    
    this.eventBus = () => eventBus;
    this._registerEvents();
    this.eventBus().emit(ViewBlock.EVENTS.INIT);
  }

  _registerEvents() {
    this.eventBus().on(ViewBlock.EVENTS.RENDER, this._render.bind(this));
    this.eventBus().on(ViewBlock.EVENTS.PROPS_MUTATION, this.didUpdate.bind(this));
    this.eventBus().on(ViewBlock.EVENTS.INIT, this.init.bind(this));
  }

  _getChildren(propsAndChildren:object) {
    const children = {};
    const props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof ViewBlock) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  _createElement() {
    this._element = document.createElement(this.tagName);
    if(this.settings) {
      this._element.setAttribute('data-id', this._id);
    }

    return this._element;
  }

  init() {
    this._createElement();
    this.eventBus().emit(ViewBlock.EVENTS.RENDER);
  }

  _render() {
    const block = this.render();
    this._removeEvents();
    this._element.innerHTML = block;
    this._addEvents();
  }

  render(): string {
    return '';
  }

  _addEvents() {
    const {events = {}} = this.props;

    if(this._element.firstChild){
      Object.keys(events).forEach(eventName => {
        //@ts-ignore
        this._element.firstChild.addEventListener(eventName, events[eventName]);
      });
    }
  }

  _removeEvents() {
    const {events = {}} = this.props;
    
    if(this._element.firstChild){
      Object.keys(events).forEach(eventName => {
        //@ts-ignore
        this._element.firstChild.removeEventListener(eventName, events[eventName]);
      });
  }
  }

  initDidUpdate() {
    this.eventBus().emit(ViewBlock.EVENTS.PROPS_MUTATION);
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