export const dataFieldEmail =
{
  name: 'email',
  type: 'email',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
};

export const dataFieldPassword =
{
  name: 'second-password',
  type: 'password',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
};

export const dataButton = {
  text: 'Войти',
  classButton: 'form__button',
  events: {
    click: (e: Event) => {
      console.log(e.target);
    }
  },
};

export const dataForm = {
  title: 'Войти',
  link: 'Нет аккаунта?',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      console.log(e.target);
    }
  },
};
