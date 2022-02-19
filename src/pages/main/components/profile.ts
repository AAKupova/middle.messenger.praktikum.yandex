import { Profile } from '../../../components/Profile';
import { Popup } from '../../../components/Popup';

import { createForm } from './form';
import { createAvatarProfile } from './avatarProfile';

interface CreateProfileProps {
  popup: Popup;
}

export const createProfile = ({ popup }: CreateProfileProps) =>
  new Profile({}, 'profile', [createAvatarProfile(), createForm({ popup })]);
