import { Popup } from '../../../components/Popup';

import { createFormPasswordEdit } from './formPasswordEdit';

export const createPopupPassword = () => {
  let popup: null | Popup = null;
  const data = {
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
  const form = createFormPasswordEdit(popup);
  popup = new Popup(data, 'popup', [form]);

  return popup;
};
