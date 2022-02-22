import avatar from '../../../static/images/default-avatar.svg';

import { Profile } from '../../components/Profile';
import { Popup } from '../../components/Popup';

import { createForm } from './formProfile';
import { createAvatar } from './avatar';

interface CreateProfileProps {
  popup: Popup;
}

export const createProfile = ({ popup }: CreateProfileProps) =>
  new Profile({}, 'profile', [
    createAvatar({ avatar, size: 'avatar__img_size_l', edit: true }),
    createForm({ popup }),
  ]);
