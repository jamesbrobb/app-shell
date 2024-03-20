/*
 * Public API Surface of jbr-app-shell
 */

export {
  AppShellRouteManager,
  SearchService,
  NoOpSearchService
} from "./lib/core";

export {
  AppShellRouteManagerService,
  AppShellMenuConfigService,
  AppShellSearchService
} from "./lib/providers";

export {getJBRAppShellProviders} from "./lib/app.providers";
export {AppShellLayoutComponent} from "./lib/components";
export {SideMenuComponentIO} from "./lib/directives";
