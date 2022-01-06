import avatarImg from '../../../static/images/photo-avatar.png';
import { valid } from '../../../src/index';
import { UserData } from '../../types/type';
import { profile, menu } from '../main';

const initDataUser = {
  'first_name': '',
  'second_name': '',
  'display_name': '',
  'login': '',
  'email': '',
  'password': '',
  'phone': '',
  'avatar': '',
  'id': 0,
};

export const mergeUserData = (data: UserData) => {
  let obj = initDataUser;

  if(data){
    obj = Object.assign(obj, data);
  }

  return obj;
};

export const dataAvatar = { img: avatarImg, size: 'avatar__img_size_m'};
export const dataAvatarProfile = { img: avatarImg, size: 'avatar__img_size_l'};
export const dataAvatarChat = { img: avatarImg };
export const dataEditAvatar = {
  events: {
    click: (e: Event) => {
      const input = e.target;

      (input as HTMLElement).addEventListener('change', () => {
        const form =  (input as HTMLElement).closest('form');
        const dataForm = new FormData(form as HTMLFormElement);
          console.log(dataForm);
      });
    }
  }
};
export const dataChat = [
  {
    name: 'Анастасия',
    isOnline: 'online',
    text: 'Привет! Как дела!?',
    count: '3',
    time: '14:40',
  },
  {
    name: 'Анастасия',
    isOnline: 'online',
    text: 'Привет! Как дела!?',
    time: '14:40',
    active: 'active',
  },
  {
    name: 'Анастасия',
    isOnline: 'online',
    text: 'Привет! Как дела!?',
    count: '3',
    time: '14:40',
  },
  {
    name: 'Анастасия',
    isOnline: 'online',
    text: 'Привет! Как дела!?',
    count: '3',
    time: '14:40',
  },
  {
    name: 'Анастасия',
    isOnline: 'online',
    text: 'Привет! Как дела!?',
    time: '14:40',
  },
  {
    name: 'Анастасия',
    isOnline: 'online',
    text: 'Привет! Как дела!?',
    time: '14:40',
  },
];

export const dataButton = {
  text: 'Сохронить',
  classButton: 'form-profile__button'
};

export const dataSidebar = {
  events: {
    click: (e: Event) => {
      const menuBurger = document.querySelector('.menu-burger');
      if(e.target === menuBurger){
        menu.show();
      }
    }
  }
};

export const dataMenu = {
  city: 'Москва',
  events: {
    click: (e: Event) => {
      const edit = document.querySelector('.edit');
      const close = document.querySelector('.menu__close');
      if(e.target === edit){
        profile.show();
      }
      if(e.target === close){
        profile.hide();
        menu.hide();
      }
    }
  }

};

export const dataHeader = { name: 'Настя', isOnline: 'Online' };
export const dataMessage = [
  {
    text: 'JavaScript — мультипарадигменный',
    time: '12:30'
  },
  {
    text: `JavaScript — мультипарадигменный,
    JavaScript — мультипарадигменный,
    JavaScript — мультипарадигменный,
    JavaScript — мультипарадигменный`,
    time: '14:30'
  },
  {
    text: `JavaScript — мультипарадигменный,
    JavaScript — мультипарадигменный,
    JavaScript — мультипарадигменный,
    JavaScript — мультипарадигменный`,
    time: '14:30'
  },
  {
    text: 'JavaScript — мультипарадигменный',
    time: '12:30'
  },
  {
    text: `JavaScript — мультипарадигменный,
    JavaScript — мультипарадигменный,
    JavaScript — мультипарадигменный,
    JavaScript — мультипарадигменный`,
    time: '14:30'
  },
  {
    text: 'JavaScript — мультипарадигменный',
    time: '12:30'
  },
];

export const dataFieldEmail =
{
  name: 'email',
  type: 'email',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
  value: 'aa.kupova@gmail.com',
  error: 'Некорректный email',
  patter: 'email',
  text: 'Почта',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataFieldLogin =
{
name: 'login',
type: 'text',
max: '20',
min: '3',
required: 'required',
autofocus: 'autofocus',
value: 'aa.kupova',
error: 'Некорректный login',
patter: 'login',
text: 'Логин',
events: {
focusin: (e: { target: HTMLInputElement }) => {
  valid.isErrorStatusField(e);
},
focusout: (e: { target: HTMLInputElement }) => {
  valid.isFieldValid(e);
},
}
};

export const dataFieldFirstName =
{
  name: 'first_name',
  type: 'text',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
  value: 'Анастасия',
  error: 'Имя с заглавной буквы',
  patter: 'name',
  text: 'Имя',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataFieldSecondName =
{
  name: 'second_name',
  type: 'text',
  max: '30',
  min: '2',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Имя с заглавной буквы',
  value: 'Купова',
  patter: 'name',
  text: 'Фамилия',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataFieldPhone = {
  name: 'phone',
  type: 'phone',
  max: '15',
  min: '10',
  required: 'required',
  autofocus: 'autofocus',
  value: '+79770000000',
  error: 'Некорректный номер телефона',
  patter: 'phone',
  text: 'Телефон',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataFieldCity = {
  name: 'city',
  type: 'text',
  max: '15',
  min: '3',
  value: 'Москва',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Введите название города',
  patter: 'city',
  text: 'Город',
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  }
};

export const dataForm = {
  title: 'Регестрация',
  link: 'Уже есть аккаунт',
  href: '/',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      valid.submit(e as any);
    },
  },
};
