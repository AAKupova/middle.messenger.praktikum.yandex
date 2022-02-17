import { PageMain } from '../../components/Main';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Popup } from '../../components/Popup';
import { Field } from '../../components/Field';
import { Menu } from '../../components/Menu';
import { Profile } from '../../components/Profile';
import { FormPasswordEdit } from '../../components/FormPasswordEdit';
import { Avatar } from '../../components/Avatar';
import { EditAvatar } from '../../components/EditAvatar';
import { formProfile } from './formProfile';
// import { messages } from './messages';
// import { chats } from './chats';
import {
  dataMenu,
  dataHeader,
  dataAvatar,
  dataAvatarProfile,
  dataSidebar,
  dataEditAvatar,
  dataNewPasswordField,
  dataOldPasswordField,
  dataPopupButton,
} from './data';

export const fieldNewPassword= new Field(
  dataNewPasswordField,
  'newPassword'
);
export const fieldOldPassword= new Field(
  dataOldPasswordField,
  'oldPassword'
);
export const button = new Button(dataPopupButton, 'button');

export const formPasswordEdit = new FormPasswordEdit (
  {},
  'form', 
  [button, fieldNewPassword, fieldOldPassword]
);
export const popup = new Popup(
  { title: 'Изменить пароль' },
  'popup',
  [formPasswordEdit]
);

export const textArea = new TextArea({}, 'text-area');

//Удалила chats потому что когда новый user и не будет изначально!
// export const sidebar = new Sidebar(dataSidebar, 'sidebar', [chats]);
export const sidebar = new Sidebar(dataSidebar, 'sidebar', []);

export const avatarHeader = new Avatar(dataAvatar, 'avatar');

//Удалила avatarHeader потому что когда новый user и не будет изначально!
//export const header = new Header(dataHeader, 'header', [avatarHeader]);
export const header = new Header(dataHeader, 'header', []);

export const editAvatar = new EditAvatar(dataEditAvatar, 'editAvatar');
export const avatarProfile = new Avatar(dataAvatarProfile, 'avatar', [editAvatar]);
export const profile = new Profile({}, 'profile', [avatarProfile, formProfile]);
export const avatarMenu = new Avatar(dataAvatarProfile, 'avatar');
export const menu = new Menu(dataMenu, 'menu', [profile, avatarMenu]);

menu.hide();
profile.hide();
popup.hide();

// Удалила компоненты textArea, messages,
//потому что когда новый user и не будет изначально!
// export const pageMain = new PageMain({},
//   [sidebar, header, textArea, messages, menu]
// );
export const pageMain = new PageMain({},
  [sidebar, header, menu, popup]
);

