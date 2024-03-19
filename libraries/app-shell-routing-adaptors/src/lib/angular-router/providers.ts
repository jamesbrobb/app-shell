import {EnvironmentProviders, inject, makeEnvironmentProviders, Provider} from "@angular/core";
import {provideRouter, Router, Routes} from "@angular/router";
import {AppShellMenuConfigService, AppShellRouteManagerService} from "@jamesbenrobb/app-shell";
import {convertRoutes} from "./routes-to-nav.convertor";
import {StandardAngularRouteManager} from "./route.manager";


export function getJBRAppShellAngularRouterProviders(routes: Routes): (Provider | EnvironmentProviders)[] {
  return [
    provideRouter(routes),
    {
      provide: AppShellMenuConfigService,
      useFactory: () => convertRoutes(inject(Router).config)
    }, {
      provide: AppShellRouteManagerService,
      useFactory: () => new StandardAngularRouteManager(inject(Router))
    }
  ]
}
