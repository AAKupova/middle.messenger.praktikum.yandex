import Handlebars from 'handlebars';

import field from '../components/Field/field.hbs';
import button from '../components/Button/button.hbs';
import sidebar from '../components/Sidebar/sidebar.hbs';
import cardChat from '../components/CardChat';
import avatar from '../components/Avatar/avatar.hbs';
import avatarEdit from '../components/AvatarEdit/avatarEdit.hbs';

Handlebars.registerPartial('field', field);
Handlebars.registerPartial('button', button);
Handlebars.registerPartial('sidebar', sidebar);
Handlebars.registerPartial('cardChat', cardChat);
Handlebars.registerPartial('avatarEdit', avatarEdit);
Handlebars.registerPartial('avatar', avatar);

export const render = (template, data) => {
  const tmp = Handlebars.compile(template);

  return tmp(data);
};
