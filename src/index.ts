import { page404 } from './pages/page404';
import { page500 } from './pages/page500';
import { Valid } from './utils/Valid';
import { login } from './pages/login/index';
import { auth } from './pages/auth/index';
import { pageMain } from './pages/main/index';
import { menu } from './pages/main';
import { profile } from './pages/main';

import { renderDom } from './utils/renderDom';
import { removeLastChar } from './utils/removeLastChar';

import './styles/normalize.css';
import './styles/fonts.scss';
import './styles/index.scss';

const getPath = () => {
  let path = window.location.pathname;

  if (path !== '/' ) {
    path = removeLastChar(path, '/');
    
  }

  return path;
};

const path = getPath();

const renderPage = () => {
  const pathToPage = {
    '/': pageMain,
    '/auth': auth,
    '/login': login,
    '/500': page500,
  };

  return pathToPage[path] || page404;
};

renderDom('.root', renderPage());

export const valid = new Valid('.form', '.button', '.field');

document.querySelector('.menu-burger')?.addEventListener(
  'click', () => menu.show()
);
document.querySelector('.menu__close')?.addEventListener(
  'click', () => {
    menu.hide();
    profile.hide();
  }
);

document.querySelector('.edit')?.addEventListener(
  'click', () => profile.show()
);

