export const dataFieldEmail =
{
  name: 'email',
  type: 'email',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
};

export const dataFieldLogin =
{
  name: 'login',
  type: 'text',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
};

export const dataFieldFirstName =
{
  name: 'first-name',
  type: 'text',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
};

export const dataFieldSecondName =
{
  name: 'second-name',
  type: 'text',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
};

export const dataFieldPhone =
{
  name: 'phone',
  type: 'phone',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
};

export const dataFieldPassword =
{
  name: 'password',
  type: 'password',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
};

export const dataFieldSecondPassword =
{
  name: 'second-password',
  type: 'password',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
};

export const dataButton = {
  text: 'Зарегистрироваться',
  classButton: 'form__button',
  events: {
    click: (e: Event) => {
      console.log(e.target);
    }
  },
};

export const dataForm = {
  title: 'Регестрация',
  link: 'Уже есть аккаунт',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      console.log(e.target);
    }
  },
};
