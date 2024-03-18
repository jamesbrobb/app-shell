import {Observable} from "rxjs";


export interface AppShellRouteManager {
  urlChange$: Observable<string>
  navigateByUrl(url: string): void
}


export class NoopAppShellRouteManager implements AppShellRouteManager {

  urlChange$: Observable<string> = new Observable<string>();
  navigateByUrl(url: string): void {}
}
