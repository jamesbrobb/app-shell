import {ApplicationConfig} from '@angular/core';
import {provideRouter} from "@angular/router";
import {getJBRAppShellProviders} from "@jamesbenrobb/app-shell";
import {getJBRAppShellAngularRouterProviders} from "@jamesbenrobb/app-shell-routing-adaptors";
import {routes} from "./app.routes";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    getJBRAppShellProviders({
      displayBreadcrumbs: true,
      displayColorModeBtn: true
    }),
    getJBRAppShellAngularRouterProviders()
  ]
};
