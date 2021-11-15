import Handlebars from "handlebars";
import form from "../components/Form/form.hbs";
import field from "../components/Field/field.hbs";
import button from "../components/Button/button.hbs";

Handlebars.registerPartial('field', field);
Handlebars.registerPartial('button', button);

const template = Handlebars.compile(form);
export const auth = template({
  title: "Регистрация",
  fields: [
    {
      field: "Email",
      name: "email",
      type: "email",
      max: "30",
      min: "2",
      required: "required",
      autofocus: "autofocus",
    },
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
      field: "Name",
      name: "first_name",
      type: "text",
      max: "30",
      min: "2",
      required: "required",
      autofocus: "autofocus",
    },
    {
      field: "Surname",
      name: "second_name",
      type: "text",
      max: "30",
      min: "2",
      required: "required",
      autofocus: "autofocus",
    },
    {
      field: "Phone",
      name: "phone",
      type: "phone",
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

  button: "Зарегистрироваться",
  classButton: 'form__button',
  classAvatar: 'form__avatar',
  text: "Войти",
});
