import { PageMain } from '../../components/Main';

import { createSidebar } from './components/sidebar';
import { createHeader } from './components/header';
import { createMenu } from './components/menu';
import { createPopupAddUser } from './components/popupAddUser';

export const initMain = () => {
  const menu = createMenu();
  const popupAddUser = createPopupAddUser();

  menu.hide();
  popupAddUser.hide();

  return new PageMain({}, [
    createSidebar({ menu, popupAddUser }),
    createHeader(),
    menu,
    popupAddUser,
  ]);
};
