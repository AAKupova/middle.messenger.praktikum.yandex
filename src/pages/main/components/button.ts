import { Button } from '../../../components/Button';

export const createButton = () => {
  const data = {
    text: 'Сохронить',
    classButton: 'form-profile__button',
    disabled: 'disabled'
  };

  return new Button(data, 'button');
};
