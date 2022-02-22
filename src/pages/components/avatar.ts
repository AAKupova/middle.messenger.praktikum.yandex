import { Avatar } from '../../components/Avatar';

import { EditAvatar } from '../../components/EditAvatar';
import UserController from '../../controllers/UserController';

interface CreateAvatarProps {
  avatar?: string;
  size?: string;
  edit?: boolean;
}

export const createAvatar = (data: CreateAvatarProps) => {
  const dataEditAvatar = {
    events: {
      change: (e: Event) => {
        const files = (<HTMLInputElement>e.target).files;
        const formData = new FormData();
        if (files) {
          formData.append('avatar', files[0]);
          UserController.editAvatar(formData);
        }
      }
    }
  };

  if(data.edit) {
    const editAvatar = new EditAvatar(dataEditAvatar, 'editAvatar');
    return new Avatar(data, 'avatar', [editAvatar]);
  }else{
    return new Avatar(data, 'avatar');
  }
};
