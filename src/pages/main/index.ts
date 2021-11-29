import { render } from '../../utils/render';
import main from '../../components/Main';
import { Menu } from '../../components/Menu/index';
import { data } from './data';

export const index = render(main, data);

export class Main {
  constructor() {
    new Menu({
      selectorMenuBurger: '.menu-burger',
      selectorMenu: '.menu',
      classMenuShow: 'menu_show',
      selectorClose: '.menu__close',
      selectorSettings: '.edit',
      selectorProfile: '.profile',
      classProfileShow: 'profile_show',
    });
  }
}
