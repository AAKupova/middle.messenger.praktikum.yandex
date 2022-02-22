import { Sidebar } from '../../../components/Sidebar';
import { Menu } from '../../../components/Menu';
import { Popup } from '../../../components/Popup';
 
interface CreateSidebarProps {
  menu: Menu;
  popupAddUser: Popup;
}

export const createSidebar = ({ menu, popupAddUser }: CreateSidebarProps) => {
  const data = {
    events: {
      click: (e: Event) => {
        const menuBurger = document.querySelector('.menu-burger');
        const addUser = document.querySelector('.add-use');
        if (e.target === menuBurger) {
          menu.show();
        }
        if( e.target === addUser) {
          popupAddUser.show();
        }
      },
    },
  };

  return new Sidebar(data, 'sidebar', []);
};
