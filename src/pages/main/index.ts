import { PageMain } from '../../components/Main';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { TextArea } from '../../components/TextArea';
import { Menu } from '../../components/Menu';
import { Profile } from '../../components/Profile';

import { Avatar } from '../../components/Avatar';
import { EditAvatar } from '../../components/EditAvatar';
import { formProfile } from './formProfile';
import { messages } from './messages';
import { chats } from './chats';
import {
  dataMenu,
  dataHeader,
  dataAvatar,
  dataAvatarProfile,
  dataSidebar,
  dataEditAvatar
} from './data';

export const textArea = new TextArea({}, 'text-area');
export const sidebar = new Sidebar(dataSidebar, 'sidebar', [chats]);

export const avatarHeader = new Avatar(dataAvatar, 'avatar');
export const header = new Header(dataHeader, 'header', [avatarHeader]);

export const editAvatar = new EditAvatar(dataEditAvatar, 'editAvatar');
export const avatarProfile = new Avatar(dataAvatarProfile, 'avatar', [editAvatar]);
export const profile = new Profile({}, 'profile', [avatarProfile, formProfile]);
export const avatarMenu = new Avatar(dataAvatarProfile, 'avatar');
export const menu = new Menu(dataMenu, 'menu', [profile, avatarMenu]);

menu.hide();
profile.hide();

export const pageMain = new PageMain({},
  [sidebar, header, textArea, messages, menu]
);

