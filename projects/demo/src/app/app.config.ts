import {ApplicationConfig} from '@angular/core';
import {getJBRAppShellProviders} from "@jamesbenrobb/app-shell";


export const appConfig: ApplicationConfig = {
  providers: [
    getJBRAppShellProviders({
      displayBreadcrumbs: true,
      displayColorModeBtn: true,
      displaySearchInput: true
    })
  ]
};
