import Handlebars from "handlebars";
import main from "./components/Main/main.hbs";


import "../styles/style.css";

const template = Handlebars.compile(main);
document.body.innerHTML = template();
