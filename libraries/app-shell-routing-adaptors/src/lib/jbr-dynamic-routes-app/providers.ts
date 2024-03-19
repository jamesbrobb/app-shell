import {EnvironmentProviders, inject, makeEnvironmentProviders} from "@angular/core";
import {RouteManager} from "@jamesbenrobb/dynamic-routes";
import {AppShellMenuConfigService, AppShellRouteManagerService} from "@jamesbenrobb/app-shell";
import {menuConfigFactory} from "./routes-to-nav.convertor";


export function getJBRAppShellDynamicRouteProviders(): EnvironmentProviders {
  return makeEnvironmentProviders([{
    provide: AppShellMenuConfigService,
    useFactory: () => menuConfigFactory(inject(RouteManager).routes)
  }, {
    provide: AppShellRouteManagerService,
    useExisting: RouteManager
  }]);
}
