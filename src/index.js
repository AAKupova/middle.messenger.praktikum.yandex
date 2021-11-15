import { auth } from "./pages/auth";
import { login } from "./pages/login";
import { index } from "./pages/main";

import "../styles/normalize.css";
import "../styles/fonts.scss";
import "../styles/index.scss";
import "../styles/style.css";

const renderPage = () => {
  const path = window.location.pathname;

  switch (path) {
    case "/login": {
      return login;
    }

    case "/auth": {
      return auth;
    }

    default: {
      return index;
    }
  }
};

document.body.innerHTML = renderPage();
