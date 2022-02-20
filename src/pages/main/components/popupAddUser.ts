import { Popup } from '../../../components/Popup';

import { createFormAddUser } from './formAddUser';

export const createPopupAddUser = () => {
  let popup: null | Popup = null;
  const data = {
    title: 'Добавить контакт',
    events: {
      click: (e: Event) => {
        const close = document.querySelector('.popup__close');
        if (e.target === close && popup) {
          popup.hide();
        }
      },
    },
  };
  const form = createFormAddUser(popup);
  popup = new Popup(data, 'popup', [form]);

  return popup;
};
