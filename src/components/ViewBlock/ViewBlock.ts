import { EventBus } from '../../utils/EventBus';
import { v4 as makeUUID } from 'uuid';

interface Events {
  click: object;
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

  constructor(tagName: string, props:Props, name:string, children?: ViewBlock[]) {
    const eventBus = new EventBus();
    this.tagName = tagName;
    this.props = props;
    this.children = children;
    this.name = name;

    this._meta = {
			tagName,
			props,
			children,
		};

    this._id = makeUUID();
    this.props = this._makePropsProxy({ ...props, _id: this._id });

    this.eventBus = eventBus;
    this._registerEvents();
    this.eventBus.emit(ViewBlock.EVENTS.INIT);
  }

  _registerEvents() {
    this.eventBus.on(ViewBlock.EVENTS.RENDER, this._render.bind(this));
    this.eventBus.on(ViewBlock.EVENTS.PROPS_MUTATION, this.didUpdate.bind(this));
    this.eventBus.on(ViewBlock.EVENTS.INIT, this.init.bind(this));
  }

  compile(block:string) {
    const fragment = document.createElement('div');
    fragment.innerHTML = block;

    if(this.children){
      Object.values(this.children).forEach((block:ViewBlock) => {
        const elementChild = fragment.querySelector(
					`[data-component="${block.name}"]`
				);

				if (elementChild && block._element) {
					elementChild.replaceWith(block._element);
				}
			});
		}
		return fragment;

    }

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

    this._removeEvents();


    if(typeof block === 'string'){
      this._element.innerHTML = block;
    }else{
      this._element.innerHTML = '';
			this._element.appendChild(block);
    }

    this._addEvents();
  }

  render(): any {
    return;
  }

  _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach(eventName => {
      this._element.removeEventListener(eventName, events[eventName]);
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
      get(target, prop: string) {
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
    this._element.style.display = 'block';
  }

  hide() {
    this._element.style.display = 'none';
  }

}