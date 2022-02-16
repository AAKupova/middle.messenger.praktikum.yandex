// import ViewBlock from './components/ViewBlock/ViewBlock';
import { router } from './routers/Router';
// import { page404 } from './pages/page404';
// import { page500 } from './pages/page500';
import { Validation } from './models/Validation';
import UserController from './controllers/AuthController';
import { login } from './pages/login/index';
import { auth } from './pages/auth/index';
import { pageMain } from './pages/main/index';
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
  .use('/', login)
  .use('/sign-up/', auth)
  .use('/messenger/', pageMain)
  .start();

  window.onload = () => {
    const path: string = window.location.pathname;
    if(path === '/messenger/') {
      UserController.getDataUser();
    }
  };

export const valid = new Validation('.form', '.button', '.field');

