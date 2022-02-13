import avatar from '../../../static/images/default-avatar.svg';
import UserController from '../../utils/UserController';
import { valid } from '../../../src/index';
import { profile, menu } from '../main';

export const dataAvatar = { avatar: avatar, size: 'avatar__img_size_m' };
export const dataAvatarProfile = { avatar: avatar, size: 'avatar__img_size_l' };
export const dataAvatarChat = { avatar: avatar };
export const dataEditAvatar = {
  events: {
    change: (e: Event) => {
        const files = (<HTMLInputElement>e.target).files;
        const formData = new FormData();
        if(files) {
          formData.append('avatar', files[0]);
          UserController.getDataAvatarUser(formData);
        }
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
  classButton: 'form-profile__button',
};

export const dataSidebar = {
  events: {
    click: (e: Event) => {
      const menuBurger = document.querySelector('.menu-burger');
      if (e.target === menuBurger) {
        menu.show();
      }
    }
  }
};

export const dataMenu = {
  events: {
    click: (e: Event) => {
      const iconSettings = document.querySelector('.icon-settings');
      const iconExit = document.querySelector('.icon-exit');
      const close = document.querySelector('.menu__close');
      const edit = document.querySelector('.settings_js');
      const exit = document.querySelector('.exit_js');

      if (e.target === iconSettings || e.target === edit ) {
        profile.show();
      }
      if (e.target === close) {
        profile.hide();
        menu.hide();
      }
      if (e.target === iconExit || e.target === exit ) {
        UserController.authLogout();
      }
    }
  }

};
//export const dataHeader = { name: 'Настя', isOnline: 'Online' };
export const dataHeader = {};
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
  error: 'Некорректный адрес почты',
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
  error: 'Некорректный Логин',
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

export const dataFieldDisplayName =
{
  name: 'display_name ',
  type: 'text',
  max: '20',
  min: '3',
  required: 'required',
  autofocus: 'autofocus',
  error: 'Некорректный псевдоним',
  patter: 'name',
  text: 'Псевдоним',
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

export const dataForm = {
  title: 'Регестрация',
  link: 'Уже есть аккаунт',
  href: '/',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      UserController.isValidData(e);
      UserController.putUserProfile();
    },
  },
};
