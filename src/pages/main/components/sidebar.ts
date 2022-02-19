import { Sidebar } from '../../../components/Sidebar';
import { Menu } from '../../../components/Menu';

interface CreateSidebarProps {
  menu: Menu;
}

export const createSidebar = ({ menu }: CreateSidebarProps) => {
  const data = {
    events: {
      click: (e: Event) => {
        const menuBurger = document.querySelector('.menu-burger');
        if (e.target === menuBurger) {
          menu.show();
        }
      },
    },
  };

  return new Sidebar(data, 'sidebar', []);
};
