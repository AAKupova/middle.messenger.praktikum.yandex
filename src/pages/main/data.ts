import avatar from '../../../static/images/default-avatar.svg';
import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';
import { profile, menu } from '../main';
import { valid } from '../../index';

export const dataPhone = {
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  },
  required: 'required',
  autofocus: 'autofocus',
  name: 'phone',
  type: 'phone',
  max: '15',
  min: '10',
  error: 'Некорректный номер телефона',
  patter: 'phone',
  text: 'Телефон',
};

export const dataSecondName = {
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  },
  required: 'required',
  autofocus: 'autofocus',
  name: 'second_name',
  type: 'text',
  max: '30',
  min: '2',
  error: 'Имя с заглавной буквы',
  patter: 'name',
  text: 'Фамилия',
};

export const dataFirstName = {
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  },
  required: 'required',
  autofocus: 'autofocus',
  name: 'first_name',
  type: 'text',
  max: '30',
  min: '2',
  error: 'Имя с заглавной буквы',
  patter: 'name',
  text: 'Имя',
};

export const dataDisplayName = {
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  },
  required: 'required',
  autofocus: 'autofocus',
  name: 'display_name',
  type: 'text',
  max: '20',
  min: '3',
  error: 'Некорректный псевдоним',
  patter: 'name',
  text: 'Псевдоним',
};

export const dataLogin = {
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  },
  required: 'required',
  autofocus: 'autofocus',
  name: 'login',
  type: 'text',
  max: '20',
  min: '3',
  error: 'Некорректный Логин',
  patter: 'login',
  text: 'Логин',
};

export const dataEmail = {
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  },
  required: 'required',
  autofocus: 'autofocus',
  name: 'email',
  type: 'email',
  max: '30',
  min: '2',
  error: 'Некорректный адрес почты',
  patter: 'email',
  text: 'Почта',
};

export const dataButton = {
  text: 'Сохронить',
  classButton: 'form-profile__button',
  disabled: 'disabled'
};

export const dataForm = {
  title: 'Регестрация',
  link: 'Уже есть аккаунт',
  href: '/',
  events: {
    submit: (e: Event) => {
      e.preventDefault();
      console.log(e);
      UserController.isValidData(e);
      UserController.editProfile();
    },
  },
};

export const dataPopupButton = {
  text: 'Сохронить',
  classButton: 'form-login__button',
};
export const dataNewPasswordField = {
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  },
  required: 'required',
  autofocus: 'autofocus',
  name: 'password',
  type: 'password',
  max: '40',
  min: '8',
  error: 'Пароль не меньше 8 символов',
  patter: 'password',
  text: 'Новый пароль',
};

export const dataOldPasswordField = {
  events: {
    focusin: (e: { target: HTMLInputElement }) => {
      valid.isErrorStatusField(e);
    },
    focusout: (e: { target: HTMLInputElement }) => {
      valid.isFieldValid(e);
    },
  },
  required: 'required',
  autofocus: 'autofocus',
  name: 'old-password',
  type: 'password',
  max: '40',
  min: '8',
  error: 'Пароль не меньше 8 символов',
  patter: 'password',
  text: 'Старый пароль',
};

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
          UserController.editAvatar(formData);
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
  phone: 'phone',
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
        AuthController.logout();
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