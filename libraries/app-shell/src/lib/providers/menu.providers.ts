import {EnvironmentProviders, inject, InjectionToken, makeEnvironmentProviders} from "@angular/core";

import {NoopAppShellRouteManager} from "../core";
import {AppShellRouteManagerService} from "./route.providers";
import {NavConfig, NavigationService} from "@jamesbenrobb/ui";
import {MenuService} from "../core/menu/menu.service";


export const AppShellMenuConfigService = new InjectionToken<NavConfig>('AppShellMenuConfigService', {
  providedIn: 'root',
  factory: () => {
    console.warn('No menu config provided through AppShellMenuConfigService Token');
    return [];
  }
});


export function getMenuProviders(): EnvironmentProviders {
  return makeEnvironmentProviders([{
    provide: MenuService,
    useFactory: () => {
      const routeManager = inject(AppShellRouteManagerService),
        menuConfig = inject(AppShellMenuConfigService);

      return new MenuService(
        new NavigationService(menuConfig),
        routeManager
      );
    }
  }]);
}
