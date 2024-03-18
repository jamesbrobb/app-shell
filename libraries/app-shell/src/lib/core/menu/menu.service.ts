import {NavigationService, NavItemNode} from "@jamesbenrobb/ui";
import {AppShellRouteManager} from "../route/route.manager";
import {tap} from "rxjs";


export class MenuService {

  readonly #navService: NavigationService;
  readonly #routeManager: AppShellRouteManager;

  get nodes() {
    return this.#navService.nodes;
  }

  get currentNodes$() {
    return this.#navService.currentNodes$;
  }

  constructor(navService: NavigationService, routeManager: AppShellRouteManager) {
    this.#navService = navService;
    this.#routeManager = routeManager;

    this.#routeManager.urlChange$.pipe(
      tap(url => this.#navService.onUrlUpdate(url))
    ).subscribe();
  }

  selectNode(node: NavItemNode): void {
    this.#routeManager.navigateByUrl(node.path);
  }
}
