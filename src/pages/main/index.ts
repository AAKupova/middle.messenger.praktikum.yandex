import ViewBlock from '../../components/ViewBlock/ViewBlock';
import { PageMain } from '../../components/Main';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Chat } from '../../components/Chat';
import { TextArea } from '../../components/TextArea';
import { Message } from '../../components/Message';
import { Menu } from '../../components/Menu';
import { Profile } from '../../components/Profile';
import { Button } from '../../components/Button';
import { Avatar } from '../../components/Avatar';
import {
  dataChat,
  dataProfile,
  dataButton,
  dataMenu,
  dataHeader,
  dataMessage,
  dataAvatar,
  dataAvatarChat,
  dataAvatarProfile
} from './data';

const arrChat: ViewBlock[] = [];
const arrMessage: ViewBlock[] = [];

dataChat.forEach(data => {
  const avatarChat = new Avatar(dataAvatarChat, 'avatar');
  const chat: Chat = new Chat(data, 'chat', [avatarChat]);
  arrChat.push(chat);
});

dataMessage.forEach(data => {
  const message = new Message(data, 'message');
  arrMessage.push(message);
});
export const avatarProfile = new Avatar(dataAvatarProfile, 'avatar');
export const avatarHeader = new Avatar(dataAvatar, 'avatar');
export const avatar = new Avatar(dataAvatar, 'avatar');
export const textArea = new TextArea({}, 'text-area');
export const sidebar = new Sidebar({}, 'sidebar', [arrChat]);
export const button = new Button(dataButton, 'button');
export const header = new Header(dataHeader, 'header', [avatarHeader]);
export const profile = new Profile(dataProfile, 'profile', [button, avatarProfile]);
export const menu = new Menu(dataMenu, 'menu', [profile]);

menu.hide();
profile.hide();

export const pageMain = new PageMain({},
  [sidebar, header, textArea, arrMessage, menu]
);

