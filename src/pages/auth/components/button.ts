import { Button } from '../../../components/Button';

export const createButton = () => {
  const data = {
    text: 'Зарегистрироваться',
    classButton: 'form-auth__button',
  };

  return new Button(data, 'button');
};
