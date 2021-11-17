import img from '../../images/photo.jpg';
import imgMenu from '../../images/photo-avatar.png';

export const data = {
  chat: [
    {
      img: img,
      name: 'Анастасия',
      isOnline: 'online',
      text: 'Привет! Как дела!?',
      count: '3',
      time: '14:40',
    },
    {
      active: 'chat_active',
      img: img,
      name: 'Анастасия',
      isOnline: 'online',
      text: 'Привет! Как дела!?',
      count: '2',
      time: '14:00',
    },
  ],

  message: [
    {
      text: 'В наборе всё, что нужно: мат. анализ, линейная алгебра, комбинаторика, теория вероятностей и мат. статистика.',
      time: '12-20',
    },
    {
      text: 'В наборе всё, что нужно: мат. анализ, линейная алгебра, комбинаторика, теория вероятностей и мат. статистика.',
      time: '12-20',
    },
    {
      text: 'В наборе всё',
      time: '12-20',
    },
  ],

  menu: {
    size: 'avatar__img_size_l',
    img: imgMenu,
    name: 'Анастасия ',
    city: 'Москва',
  },

  profile: {
    img: imgMenu,
    editAvatar: true,
    size: 'avatar__img_size_l',
    button: 'Сохранить',
    email: 'aa.kupova@gmail.com',
    login: 'aa.kupova',
    name: 'Анастасия ',
    surname: 'Купова',
    nickname: 'Настюша',
    telephone: '+7 (909) 967 30 30',
    city: 'Москва Россия',
    classButton: 'profile__button',
  },

  size: 'avatar__img_size_m',
  img: img,
  name: 'Анастасия',
  isOnline: 'online',
};
