import {EnvironmentProviders, inject, Provider} from "@angular/core";
import {Router} from "@angular/router";
import {AppShellMenuConfigService, AppShellRouteManagerService} from "@jamesbenrobb/app-shell";
import {convertRoutes} from "./routes-to-nav.convertor";
import {DefaultAngularRouteManager} from "./route.manager";
import {NavConfig} from "@jamesbenrobb/ui";


export function getJBRAppShellAngularRouterProviders(navConfig?: NavConfig): (Provider | EnvironmentProviders)[] {
  return [{
      provide: AppShellMenuConfigService,
      useFactory: () => {
        if (navConfig) {
          return navConfig;
        }
        return convertRoutes(inject(Router).config)
      }
    }, {
      provide: AppShellRouteManagerService,
      useFactory: () => new DefaultAngularRouteManager(inject(Router))
    }
  ]
}
