import { Button } from '../../../components/Button';

export const createButton = () => {
  const dataButton = {
    text: 'Войти',
    classButton: 'form-login__button',
    disabled: 'disabled',
  };
  return new Button(dataButton, 'button');
};
