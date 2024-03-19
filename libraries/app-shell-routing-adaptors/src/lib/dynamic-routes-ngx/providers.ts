import {EnvironmentProviders, inject, makeEnvironmentProviders} from "@angular/core";
import {RouteManager} from "@jamesbenrobb/dynamic-routes";
import {AppShellMenuConfigService, AppShellRouteManagerService} from "@jamesbenrobb/app-shell";
import {convertRoutes} from "./routes-to-nav.convertor";


export function getJBRAppShellDynamicRoutesNgxProviders(): EnvironmentProviders {
  return makeEnvironmentProviders([{
    provide: AppShellMenuConfigService,
    useFactory: () => convertRoutes(inject(RouteManager).routes)
  }, {
    provide: AppShellRouteManagerService,
    useExisting: RouteManager
  }]);
}
