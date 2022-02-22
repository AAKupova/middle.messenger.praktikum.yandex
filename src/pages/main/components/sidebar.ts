import { Sidebar } from '../../../components/Sidebar';
import { Menu } from '../../../components/Menu';
import { Popup } from '../../../components/Popup';
 
interface CreateSidebarProps {
  menu: Menu;
  popup: Popup;
}

export const createSidebar = ({ menu, popup }: CreateSidebarProps) => {
  const data = {
    events: {
      click: (e: Event) => {
        const menuBurger = document.querySelector('.menu-burger');
        const addUser = document.querySelector('.add-use');
        if (e.target === menuBurger) {
          menu.show();
        }
        if( e.target === addUser) {
          popup.show();
        }
      },
    },
  };

  return new Sidebar(data, 'sidebar', []);
};
