import Handlebars from "handlebars";
import main from "../components/Main/main.hbs";
import sidebar from "../components/Sidebar/sidebar.hbs";
import cardChat from "../components/CardChat/card.hbs";
import avatar from "../components/Avatar/avatar.hbs";

import img from "../../images/photo.jpg";
import "../../styles/style.css";

Handlebars.registerPartial("sidebar", sidebar);
Handlebars.registerPartial("cardChat", cardChat);
Handlebars.registerPartial("avatar", avatar);

const template = Handlebars.compile(main);
export const index = template({
  img: img,
  name: "Анастасия",
  isOnline: "online",
  text: "Привет! Как дела!?",
  count: '3',
  time: '14:40'
});
