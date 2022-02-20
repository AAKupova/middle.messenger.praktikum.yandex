import { Button } from '../../../components/Button';

export const createPopupButton = () => {
  const data = {
    text: 'Сохранить',
    classButton: 'form-popup__button',
  };

  return new Button(data, 'button');
};
