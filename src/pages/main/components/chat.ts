import { Chat } from '../../../components/Chat';

import { createAvatarChat } from './avatarChat';

export const createChat = () => {
  const data = [
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

  return data.map((data) => new Chat(data, 'chat', [createAvatarChat()]));
};
