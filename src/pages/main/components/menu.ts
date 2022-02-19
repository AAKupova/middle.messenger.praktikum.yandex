import { Menu } from '../../../components/Menu';
import AuthController from '../../../controllers/AuthController';

import { createProfile } from './profile';
import { createPopup } from './popup';
import { createAvatarProfile } from './avatarProfile';

export const createMenu = () => {
  let menu: null | Menu = null;
  const popup = createPopup();
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

  menu = new Menu(data, 'menu', [profile, createAvatarProfile(), popup]);

  return menu;
};
