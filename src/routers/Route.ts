import { isEqual } from '../utils/isEqual';
import ViewBlock from '../components/ViewBlock/ViewBlock';
import { renderDom } from '../utils/renderDom';


interface Props {
  rootQuery: string;
}

export class Route {
  _pathname: string;
  _blockClass: ViewBlock;
  _block: ViewBlock | null;
  _props: Props;

  constructor(pathname: string, view: ViewBlock, props: Props) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = this._blockClass;
      renderDom(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
