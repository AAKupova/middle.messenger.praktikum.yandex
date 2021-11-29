import { Chat } from '../../components/Chat';
import { Avatar } from '../../components/Avatar';
import { dataChat, dataAvatarChat } from './data';

export const chats: any= [];

dataChat.forEach(data => {
  const avatarChat = new Avatar(dataAvatarChat, 'avatar');
  const chat: Chat = new Chat(data, 'chat', [avatarChat]);
  chats.push(chat);
});