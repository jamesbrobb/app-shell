import {ApplicationConfig} from '@angular/core';
import {getJBRAppShellProviders, AppShellSearchService, NoOpSearchService} from "@jamesbenrobb/app-shell";


export const appConfig: ApplicationConfig = {
  providers: [
    getJBRAppShellProviders({
      displayBreadcrumbs: true,
      displayColorModeBtn: true
    })
  ]
};
