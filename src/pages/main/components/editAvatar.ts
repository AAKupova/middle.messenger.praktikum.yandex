import { EditAvatar } from '../../../components/EditAvatar';
import UserController from '../../../controllers/UserController';

export const createEditAvatar = () => {
  const data = {
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

  return new EditAvatar(data, 'editAvatar');
};
