import { Avatar } from '../../../components/Avatar';
import avatar from '../../../../static/images/default-avatar.svg';

export const createAvatarChat = () => new Avatar({ avatar, size: 'avatar__img_size_m' }, 'avatar');
