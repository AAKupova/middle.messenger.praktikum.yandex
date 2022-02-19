import { PageMain } from '../../components/Main';

import { createSidebar } from './components/sidebar';
import { createHeader } from './components/header';
import { createMenu } from './components/menu';

export const initMain = () => {
  const menu = createMenu();

  menu.hide();

  return new PageMain({}, [createSidebar({ menu }), createHeader(), menu]);
};
