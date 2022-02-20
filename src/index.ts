// import ViewBlock from './components/ViewBlock/ViewBlock';
import { router } from './routers/Router';
// import { page404 } from './pages/page404';
// import { page500 } from './pages/page500';
// import { Validation } from './models/Validation';
import UserController from './controllers/AuthController';
import { initFormLogin } from './pages/login/index';
import { initFormAuth } from './pages/auth/index';
import { initMain } from './pages/main/index';
// import { removeLastChar } from './utils/removeLastChar';

import './styles/normalize.css';
import './styles/fonts.scss';
import './styles/index.scss';


// interface PathToPage {
//   [key: string]: ViewBlock;
// }

// const getPath = () => {
//   let path:string | undefined = window.location.pathname;

//   if (path !== '/' ) {
//     path = removeLastChar(path, '/');

//   }

//   return path;
// };

// const path = getPath();

// const renderPage = () => {
//   const pathToPage: PathToPage = {
//     '/': pageMain,
//     '/auth': auth,
//     '/login': login,
//     '/500': page500,
//   };

//   if(path){
//     return pathToPage[path] || page404;
//   }

//   return page404;
// };

// renderDom('.root', renderPage());

router
  .use('/', initFormLogin)
  .use('/sign-up/', initFormAuth)
  .use('/messenger/', initMain)
  .start();

window.onload = () => {
  UserController.getDataUser();
};

// export const validFormLogin = new Validation('.form-login', '.button', '.field');
// export const validFormAuth = new Validation('.form-auth', '.button', '.field');
// export const validFormProfile = new Validation('.form-profile', '.button', '.field');
// export const validFormPopupEdit = new Validation('.form-password-edit', '.button', '.field');

