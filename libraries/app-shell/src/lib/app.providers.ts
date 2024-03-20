import {EnvironmentProviders, importProvidersFrom, inject, Provider} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {getComponentLoaderProviders, registerButtonIcons} from "@jamesbenrobb/ui";
import {getMenuProviders} from "./providers/menu.providers";
import {AppShellSettings, AppShellSettingsService} from "./app.settings";
import {getSideMenuLoaderComponentProviders} from "./providers/side-menu-loader.providers";
import {DEFAULT_SIDE_MENU_COMPONENT} from "./directives/side-menu-loader/side-menu-loader.directive";
import {AppShellSearchService} from "./providers/search.providers";


export type AppShellOptions = Omit<Partial<AppShellSettings>, 'displaySearchInput'>


export function getJBRAppShellProviders(options?: AppShellOptions): (Provider | EnvironmentProviders)[] {
  return [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule
    ),
    getMenuProviders(),
    getComponentLoaderProviders(),
    getSideMenuLoaderComponentProviders(),
    registerButtonIcons('assets/icons/'),
    {
      provide: AppShellSettingsService,
      useFactory: (): AppShellSettings => {
        const searchService = inject(AppShellSearchService, {optional: true});
        return {
          displayColorModeBtn: options?.displayColorModeBtn ?? true,
          displayBreadcrumbs: options?.displayBreadcrumbs ?? true,
          displaySearchInput: !!searchService,
          sideMenuComponentType: options?.sideMenuComponentType ?? DEFAULT_SIDE_MENU_COMPONENT
        }
      }
    }
  ];
}
