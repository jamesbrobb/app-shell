import {InjectionToken} from "@angular/core";
import {AppShellRouteManager, NoopAppShellRouteManager} from "../core";


export const AppShellRouteManagerService = new InjectionToken<AppShellRouteManager>('AppShellRouteManagerService', {
  providedIn: 'root',
  factory: () => {
    console.warn('No route manager provided through AppShellRouteManagerService Token');
    return new NoopAppShellRouteManager()
  }
});

