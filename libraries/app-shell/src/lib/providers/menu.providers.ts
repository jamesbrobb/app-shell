import {EnvironmentProviders, inject, InjectionToken, makeEnvironmentProviders} from "@angular/core";

import {NoopAppShellRouteManager} from "../core";
import {AppShellRouteManagerService} from "./route.providers";
import {NavConfig, NavigationService} from "@jamesbenrobb/ui";
import {MenuService} from "../core/menu/menu.service";


export const AppShellMenuConfigService = new InjectionToken<NavConfig>('AppShellMenuConfigService');


export function getMenuProviders(): EnvironmentProviders {
  return makeEnvironmentProviders([{
    provide: MenuService,
    useFactory: () => {
      const routeManager = inject(AppShellRouteManagerService, {optional: true}) || undefined,
        menuConfig = inject(AppShellMenuConfigService, {optional: true}) || undefined;

      if(!menuConfig) {
        console.warn('No menu config provided through AppShellMenuConfigService Token');
      }

      if(!routeManager) {
        console.warn('No route manager provided through AppShellRouteManagerService Token');
      }

      return new MenuService(
        new NavigationService(menuConfig),
        routeManager || new NoopAppShellRouteManager()
      );
    }
  }]);
}
