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
import { FormProfile } from '../../components/FormProfile';
import { FieldProfile } from '../../components/FieldProfile';
import {
  dataChat,
  dataButton,
  dataMenu,
  dataHeader,
  dataMessage,
  dataAvatar,
  dataAvatarChat,
  dataAvatarProfile,
  dataFieldEmail,
  dataFieldLogin,
  dataFieldFirstName,
  dataFieldSecondName,
  dataFieldPhone,
  dataFieldCity,
  dataForm,
  dataSidebar
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
export const fieldProfileEmail = new FieldProfile(dataFieldEmail, 'field-email');
export const fieldProfileFirstName = new FieldProfile(dataFieldFirstName, 'field-first-name');
export const fieldProfileLogin = new FieldProfile(dataFieldLogin, 'field-login');
export const fieldProfileCity = new FieldProfile(dataFieldCity, 'field-city');
export const fieldProfileSecondName = new FieldProfile(dataFieldSecondName, 'field-second-name');
export const fieldProfilePhone = new FieldProfile(dataFieldPhone, 'field-phone');
export const button = new Button(dataButton, 'button');

export const formProfile = new FormProfile(
  dataForm,
  'form',
  [
    button,
    fieldProfileEmail,
    fieldProfileFirstName,
    fieldProfileLogin,
    fieldProfileCity,
    fieldProfileSecondName,
    fieldProfilePhone
  ]
);

export const avatarMenu = new Avatar(dataAvatarProfile, 'avatar');
export const avatarProfile = new Avatar(dataAvatarProfile, 'avatar');
export const avatarHeader = new Avatar(dataAvatar, 'avatar');
export const avatar = new Avatar(dataAvatar, 'avatar');
export const textArea = new TextArea({}, 'text-area');
export const sidebar = new Sidebar(dataSidebar, 'sidebar', [arrChat]);
export const header = new Header(dataHeader, 'header', [avatarHeader]);
export const profile = new Profile({}, 'profile', [avatarProfile, formProfile]);
export const menu = new Menu(dataMenu, 'menu', [profile, avatarMenu]);

menu.hide();
profile.hide();

export const pageMain = new PageMain({},
  [sidebar, header, textArea, arrMessage, menu]
);

