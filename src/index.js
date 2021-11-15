import { auth } from "./pages/auth";
import { login } from "./pages/login";
import { index } from "./pages";

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
