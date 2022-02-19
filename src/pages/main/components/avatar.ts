import { Avatar } from '../../../components/Avatar';
import avatar from '../../../../static/images/default-avatar.svg';

export const createAvatar = () => {
  const data = { avatar: avatar, size: 'avatar__img_size_m' };

  return new Avatar(data, 'avatar');
};
