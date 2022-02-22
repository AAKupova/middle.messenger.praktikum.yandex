import AuthController from '../../controllers/AuthController';
import avatar from '../../../static/images/default-avatar.svg';

import { createFormPasswordEdit } from './formPasswordEdit';
import { createPopup } from './popup';
import { Popup } from '../../components/Popup';
import { Menu } from '../../components/Menu';
import { createProfile } from './profile';
import { createAvatar } from './avatar';

export const createMenu = () => {
  let menu: null | Menu = null;
  let popup: null | Popup = null;

  const dataPopup = {
    className: 'close-password-edit',
    title: 'Изменить пароль',
    events: {
      click: (e: Event) => {
        const close = document.querySelector('.close-password-edit');
        if (e.target === close && popup) {
          popup?.hide();
        }
      },
    },
  };

  const dataMenu = {
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

  const form = createFormPasswordEdit(popup);
  popup = createPopup(dataPopup, [form]);
  const profile = createProfile({ popup });

  profile.hide();
  popup.hide();

  menu = new Menu(dataMenu, 'menu', [
    profile,
    createAvatar({ avatar, size: 'avatar__img_size_l' }),
    popup,
  ]);

  return menu;
};
