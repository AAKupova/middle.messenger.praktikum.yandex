import { EventBus } from '../../utils/EventBus';
import { v4 as makeUUID } from 'uuid';

interface Events {
  [key: string]: () => void
}

interface Target {
  [key: string]: any;
}

interface Props {
  events?: Events,
  settings?: {
    withInternalID: boolean;
  };
}

interface Meta {
  tagName: string,
  props: Props,
  children?: object,
}

export default class ViewBlock {
  _meta: Meta;

  _id: string;

  _element: HTMLElement;

  tagName: string;

  name: string;

  children?: ViewBlock[] = [];

  eventBus: EventBus;

  props: Props;

  static EVENTS = {
    INIT: 'init',
    PROPS_MUTATION: 'mutation',
    RENDER: 'render'
  };

  constructor(tagName: string, props: Props, name: string, children?: ViewBlock[]) {
    this.eventBus = new EventBus();
    this.props = props;
    this.children = children;
    this.name = name;

    this._meta = {
      tagName,
      props,
      children,
    };

    this.props = this._makePropsProxy({ ...props, _id: this._id });
    this._id = makeUUID();
    this._registerEvents();
    this.eventBus.emit(ViewBlock.EVENTS.INIT);
  }

  _registerEvents() {
    this.eventBus.on(ViewBlock.EVENTS.RENDER, this._render.bind(this));
    this.eventBus.on(ViewBlock.EVENTS.PROPS_MUTATION, this.didUpdate.bind(this));
    this.eventBus.on(ViewBlock.EVENTS.INIT, this.init.bind(this));
  }

  compile(block: string) {
    const tmp = document.createElement('template');
    tmp.innerHTML = block;

    if (this.children) {
      Object.values(this.children).forEach((block: ViewBlock) => {
        if (Array.isArray(block)) {
          block.forEach(component => {
            const elementChild = tmp.content.querySelector(
              `[data-component="${component.name}"]`
            );
            elementChild?.appendChild(component._element);

          });
        } else {
          const elementChild = tmp.content.querySelector(
            `[data-component="${block.name}"]`
          );

          if (elementChild && block._element) {
            elementChild.replaceWith(block._element);
          }
        }
      });
    }

    return tmp.content;

  }

  // _unwrap(wrapper) {
  //   const child = wrapper.firstChild;

  //   if (child && child.tagName) {
  //     child.setAttribute('data-id', this._id);

  //     return wrapper.removeChild(child);
  //   }
  // } 

  _createElement() {
    const tagName = this._meta?.tagName;
    if (tagName) {
      this._element = document.createElement(tagName);
      this._element.setAttribute('data-id', this._id);

      return this._element;
    }
  }

  init() {
    this._createElement();
    this.eventBus.emit(ViewBlock.EVENTS.RENDER);
    this.initDidUpdate();
  }

  _render() {
    const block = this.render();

    (typeof block === 'string')
      ? this.renderComponent(block)
      : this.renderPage(block);
  }

  renderComponent(block: string) {
    this._removeEvents();
    this._element.innerHTML = block;
    this._addEvents();
  }

  renderPage(block: DocumentFragment) {
    this._removeEvents();
    this._element.innerHTML = '';
    this._element.appendChild(block);
    this._addEvents();
  }

  render(): DocumentFragment | string {
    return '';
  }

  _addEvents() {
    const events = this.props.events || {};

    Object.keys(events).forEach(eventName => {
      if (this._element.firstChild) {
        this._element.firstChild.addEventListener(eventName, events[eventName]);
      } else {
        this._element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  _removeEvents() {
    const events = this.props.events || {};

    Object.keys(events).forEach((eventName: string) => {
      if (this._element.firstChild) {
        this._element.firstChild.removeEventListener(eventName, events[eventName]);
      } else {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  initDidUpdate() {
    this.eventBus.emit(ViewBlock.EVENTS.PROPS_MUTATION);
  }

  didUpdate(oldProps: object, newProps: object) {
    if (oldProps !== newProps) {
      this.eventBus.emit(ViewBlock.EVENTS.RENDER);
    }
  }

  setProps = (nextProps: object) => {
    if (!nextProps) {
      return;
    }

    const oldProps = this.props;
    this.props = Object.assign(this.props, nextProps);
    this.eventBus.emit(ViewBlock.EVENTS.PROPS_MUTATION, { oldProps, props: this.props });
  };

  getElement() {
    return this._element;
  }

  _makePropsProxy(props: object) {
    const proxyProps = new Proxy(props, {
      get(target: Target, prop: string) {
        if (prop.indexOf('_') === 0) {
          throw new Error('Нет прав');
        }
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      set(target, prop: string, val) {
        if (prop.indexOf('_') === 0) {
          throw new Error('Нет прав');
        } else {
          target[prop] = val;
          return true;
        }
      },

      deleteProperty() {
        throw new Error('нет доступа');
      },
    });

    return proxyProps;
  }

  show() {
    this._element.style.display = 'flex';
  }


  hide() {
    this._element.style.display = 'none';
  }
}