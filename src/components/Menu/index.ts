import * as Handlebars from 'handlebars';

import ViewBlock from '../ViewBlock/ViewBlock';
import { Profile } from '../Profile';

import menu from './index.hbs';
import './index.scss';


export class MenuPage extends ViewBlock {
  constructor(props:object, name:string, children: ViewBlock[]) {
    super('menu', props, name, children);
  }

  render():HTMLElement {
    const tmp = Handlebars.compile(menu);
    return this.compile(tmp(this.props));
  }
}

export const profile = new Profile({
  email: 'aa.kupova@gmail.com',
  login: 'aa.kupova',
  name: 'Анастасия',
  surname: 'Купова',
  nickname: 'Анастасия',
  city: 'Москва',
  telephone: '123345677'
}, 'profile');

export const menuPage = new MenuPage(
  { name: 'Анастасия', city: 'Москва' }, 
  'menu',
  [profile]
);




// export class Menu {
//   button: HTMLElement;
//   menu: HTMLElement;
//   close: HTMLElement;
//   settings: HTMLElement;
//   profile: HTMLElement;
//   classMenuShow: string;
//   classProfileShow: string;

//   constructor({
//     selectorMenuBurger,
//     selectorMenu,
//     classMenuShow,
//     selectorClose,
//     selectorSettings,
//     selectorProfile,
//     classProfileShow,
//   }) {
//     this.button = document.querySelector(selectorMenuBurger);
//     this.menu = document.querySelector(selectorMenu);
//     this.close = document.querySelector(selectorClose);
//     this.settings = document.querySelector(selectorSettings);
//     this.profile = document.querySelector(selectorProfile);
//     this.classMenuShow = classMenuShow;
//     this.classProfileShow = classProfileShow;

//     this.listener();
//   }

//   listener() {
//     this.button.addEventListener('click', this.show.bind(this));
//     this.close.addEventListener('click', this.hide.bind(this));
//     this.settings.addEventListener('click', this.showProfile.bind(this));
//   }

//   show() {
//     this.menu.classList.add(this.classMenuShow);
//   }

//   showProfile() {
//     this.profile.classList.add(this.classProfileShow);
//   }

//   hide() {
//     this.menu.classList.remove(this.classMenuShow);
//     this.profile.classList.remove(this.classProfileShow);
//   }
// }
