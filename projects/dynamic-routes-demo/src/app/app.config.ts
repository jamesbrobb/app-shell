import { ApplicationConfig } from '@angular/core';
import {getJBRAppShellProviders} from "@jamesbenrobb/app-shell";
import {getJBRAppShellDynamicRouteProviders} from "@jamesbenrobb/app-shell-routing-adaptors";
import {getAppProviders} from "@jamesbenrobb/dynamic-route-app";


export const appConfig: ApplicationConfig = {
  providers: [
    getJBRAppShellProviders({
      displayBreadcrumbs: true,
      displayColorModeBtn: true
    }),
    getJBRAppShellDynamicRouteProviders(),
    getAppProviders(
      'assets/route-config.json',
      'Demo App'
    )
  ]
};
