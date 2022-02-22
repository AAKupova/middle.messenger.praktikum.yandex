import { createFormAddUser } from './components/formAddUser';
import { createSidebar } from './components/sidebar';
import { createHeader } from './components/header';
import { createPopup } from '../components/popup';
import { PageMain } from '../../components/Main';
import { createMenu } from './components/menu';
import { Popup } from '../../components/Popup';

export const initMain = () => {
  const dataPopup = {
    className: 'close-add-user',
    title: 'Добавить контакт',
    user: true,
    events: {
      click: (e: Event) => {
        const close = document.querySelector('.close-add-user');
        const card = document.querySelector('.card');
        console.log(e.target);
        if ((e.target === close || e.target === card) && popup) {
          popup.hide();
        }
      },
    },
  };
  const menu = createMenu();
  let popup: null | Popup = null;
  const form = createFormAddUser(popup);
  popup = createPopup(dataPopup, [form]);

  menu.hide();
  popup.hide();

  return new PageMain({}, [
    createSidebar({ menu, popup }),
    createHeader(),
    menu,
    popup,
  ]);
};
