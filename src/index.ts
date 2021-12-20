// import ViewBlock from './components/ViewBlock/ViewBlock';
import { Router } from './utils/Router';
// import { page404 } from './pages/page404';
// import { page500 } from './pages/page500';
import { Valid } from './utils/Valid';
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

const router = new Router('.root');
router
  .use('/', login)
  .use('/sign-up/', auth)
  .use('/messenger/', pageMain)
  .start();

export const valid = new Valid('.form', '.button', '.field');