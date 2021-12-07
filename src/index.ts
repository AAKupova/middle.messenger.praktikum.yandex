// import { auth } from './pages/auth';
// import { login } from './pages/login';
// import { index, Main } from './pages/main';
// import { page404 } from './pages/page404';
// import { page500 } from './pages/page500';
import { removeLastChar } from './utils/removeLastChar';

// import Button from './components/Button';
// import Field from './components/Field';

import { renderDom } from './utils/renderDom';
import { login } from './pages/login/index';
import { auth } from './pages/auth/index';
import { pageMain } from './pages/main/index';
import { menu } from './pages/main';
import { profile } from './pages/main';

import './styles/normalize.css';
import './styles/fonts.scss';
import './styles/index.scss';

const getPath = () => {
  const path = window.location.pathname;
  let Newpath;

  if (path !== '/') {
    Newpath = removeLastChar(path, '/');
  }

  return Newpath;
};

const path = getPath();

const renderPage = () => {
  const pathToPage = {
    // '/': index,
    '/auth': auth,
    '/login': login,
    '/page': pageMain,
//     '/500': page500,
  };

  return pathToPage[path];

//   return pathToPage[path] || page404;
};

// const initPage = () => {
//   const initToPage = {
//     '/': () => new Main(),
//   };

//   const init = initToPage[path];

//   return init && init();
// }

// document.body.innerHTML = renderPage();

// initPage();
renderDom('.root', renderPage());

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

