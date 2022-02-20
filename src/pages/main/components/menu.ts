import { Menu } from '../../../components/Menu';
import AuthController from '../../../controllers/AuthController';

import { createProfile } from './profile';
import { createPopupPassword } from './popupPassword';
import { createAvatar } from './avatar';

export const createMenu = () => {
  let menu: null | Menu = null;
  const popup = createPopupPassword();
  const profile = createProfile({ popup });
  const data = {
    phone: 'phone',
    events: {
      click: (e: Event) => {
        const close = document.querySelector('.menu__close');
        const edit = document.querySelector('.settings_js');
        const exit = document.querySelector('.exit_js');

        if (e.target === edit) {
          profile.show();
        }
        if (e.target === close && menu) {
          profile.hide();
          menu.hide();
        }
        if (e.target === exit) {
          AuthController.logout();
        }
      },
    },
  };

  profile.hide();
  popup.hide();

  menu = new Menu(data, 'menu', [profile, createAvatar(), popup]);

  return menu;
};
