import { ApplicationConfig } from '@angular/core';
import {getJBRAppShellProviders} from "@jamesbenrobb/app-shell";
import {getJBRAppShellDynamicRoutesNgxProviders} from "@jamesbenrobb/app-shell-routing-adaptors";
import {getAppProviders} from "@jamesbenrobb/dynamic-routes-ngx";


export const appConfig: ApplicationConfig = {
  providers: [
    getJBRAppShellProviders({
      displayBreadcrumbs: true,
      displayColorModeBtn: true
    }),
    getJBRAppShellDynamicRoutesNgxProviders(),
    getAppProviders(
      'assets/route-config.json',
      'Demo App'
    )
  ]
};
