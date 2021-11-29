import { auth } from './pages/auth';
import { login } from './pages/login';
import { index, Main } from './pages/main';
import { page404 } from './pages/page404';
import { page500 } from './pages/page500';
import { removeLastChar } from './utils/removeLastChar';

import './styles/normalize.css';
import './styles/fonts.scss';
import './styles/index.scss';

const getPath = () => {
  let path = window.location.pathname;

  if (path !== '/') {
    path = removeLastChar(path, '/');
  }

  return path;
};

const path = getPath();

const renderPage = () => {
  const pathToPage = {
    '/': index,
    '/auth': auth,
    '/login': login,
    '/500': page500,
  };

  return pathToPage[path] || page404;
};

const initPage = () => {
  const initToPage = {
    '/': () => new Main(),
  };

  const init = initToPage[path];

  return init && init();
}

document.body.innerHTML = renderPage();

initPage();
