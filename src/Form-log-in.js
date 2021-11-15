import Handlebars from "handlebars";
import form from "./components/Form/form.hbs";
import field from "./components/Field/field.hbs";
import avatar from "./components/Avatar/avatar.hbs";
import button from "./components/Button/button.hbs";

import "../styles/style.css";

Handlebars.registerPartial("field", field);
Handlebars.registerPartial("avatar", avatar);
Handlebars.registerPartial("button", button);

const template = Handlebars.compile(form);
document.body.innerHTML = template({
  avatar: true,
  title: "Вход",
  fields: [
    {
      field: "Login",
      name: "login",
      type: "text",
      max: "30",
      min: "2",
      required: "required",
      autofocus: "autofocus",
    },
    {
      field: "Password",
      name: "password",
      type: "password",
      max: "30",
      min: "2",
      required: "required",
      autofocus: "autofocus",
    },
  ],

  button: "Войти",
  classButton: "form__button",
  classAvatar: "form__avatar",
  text: "Нет аккаунта?",
});
