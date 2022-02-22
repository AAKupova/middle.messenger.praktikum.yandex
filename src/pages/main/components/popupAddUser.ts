import { Popup } from '../../../components/Popup';

import { createFormAddUser } from './formAddUser';

export const createPopupAddUser = () => {
  let popup: null | Popup = null;
  const form = createFormAddUser(popup);
  const data = {
    className: 'close-add-user',
    title: 'Добавить контакт',
    events: {
      click: (e: Event) => {
        const close = document.querySelector('.close-add-user');
        if (e.target === close && popup) {
          popup.hide();
        }
      },
    }, 
  };
  popup = new Popup(data, 'popup', [form]);

  return popup;
};
