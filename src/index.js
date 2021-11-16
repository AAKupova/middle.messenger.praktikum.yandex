import { auth } from "./pages/auth";
import { login } from "./pages/login";
import { index } from "./pages/main";
import { profile } from "./pages/profile";

import "./styles/normalize.css";
import "./styles/fonts.scss";
import "./styles/index.scss";

const renderPage = () => {
  const path = window.location.pathname;

  switch (path) {
    case "/login": {
      return login;
    }

    case "/auth": {
      return auth;
    }
    case "/profile": {
      return profile;
    }

    default: {
      return index;
    }
  }
};

document.body.innerHTML = renderPage();
