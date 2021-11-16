import Handlebars from 'handlebars';

import field from '../components/Field';
import button from '../components/Button';
import sidebar from '../components/Sidebar';
import header from '../components/Header';
import chat from '../components/Chat';
import avatar from '../components/Avatar';
import avatarEdit from '../components/AvatarEdit';
import textArea from '../components/TextArea';
import message from '../components/Message';


Handlebars.registerPartial('field', field);
Handlebars.registerPartial('header', header);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('sidebar', sidebar);
Handlebars.registerPartial('chat', chat);
Handlebars.registerPartial('avatarEdit', avatarEdit);
Handlebars.registerPartial('textArea', textArea);
Handlebars.registerPartial('avatar', avatar);
Handlebars.registerPartial('message', message);
  
export const render = (template, data) => {
  const tmp = Handlebars.compile(template);

  return tmp(data);
};
