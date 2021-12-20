import ViewBlock from '../components/ViewBlock/ViewBlock';
import { Route } from './Route';

export class Router {
  static __instance: Router;
  routes: Route[];
  history: any;
  _currentRoute: any | null;
  _rootQuery: string;


  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: ViewBlock) {
    const route: Route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);

    return this;
  }

  start() {
    const pathname = window.location.pathname;
    history.replaceState({ pathname }, '', pathname);

    window.addEventListener('popstate', (e: PopStateEvent) => {
      this._onRoute(e.state.pathname);
    }, false);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({ pathname }, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}
