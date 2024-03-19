import {Observable, filter, map} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";
import {AppShellRouteManager} from "@jamesbenrobb/app-shell";


export class DefaultAngularRouteManager implements AppShellRouteManager {

  readonly #router: Router;

  readonly urlChange$: Observable<string>

  constructor(router: Router) {
    this.#router = router;

    this.urlChange$ = this.#router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        return (event as NavigationEnd).url;
      })
    );
  }

  navigateByUrl(path: string): void {
    this.#router.navigateByUrl(path);
  }
}
