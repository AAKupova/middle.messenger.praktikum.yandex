import { Avatar } from '../../../components/Avatar';
import avatar from '../../../../static/images/default-avatar.svg';

import { createEditAvatar } from './editAvatar';

export const createAvatarProfile = () => {
  const data = { avatar: avatar, size: 'avatar__img_size_l' };

  return new Avatar(data, 'avatar', [createEditAvatar()]);
};
