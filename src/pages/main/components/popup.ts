import { Popup } from '../../../components/Popup';

import { createFormPasswordEdit } from './formPasswordEdit';

export const createPopup = () => {
  let popup: null | Popup = null;
  const data = {
    title: 'Изменить пароль',
    events: {
      click: (e: Event) => {
        const close = document.querySelector('.popup__close');
        if (e.target === close && popup) {
          popup.hide();
        }
      },
    },
  };
  const form = createFormPasswordEdit(popup);
  console.log(form);
  popup = new Popup(data, 'popup', [form]);

  return popup;
};
