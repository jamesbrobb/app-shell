import { ApplicationConfig } from '@angular/core';
import {getJBRAppShellProviders} from "@jamesbenrobb/app-shell";
import {getJBRAppShellDynamicRoutesNgxProviders} from "@jamesbenrobb/app-shell-routing-adaptors";
import {getJBRDRAppProviders} from "@jamesbenrobb/dynamic-routes-ngx";


export const appConfig: ApplicationConfig = {
  providers: [
    getJBRAppShellProviders({
      displayBreadcrumbs: true,
      displayColorModeBtn: true
    }),
    getJBRAppShellDynamicRoutesNgxProviders(),
    getJBRDRAppProviders(
      'assets/route-config.json', {
        appName: 'Demo App'
      }
    )
  ]
};
