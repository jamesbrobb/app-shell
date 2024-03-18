import {EnvironmentProviders, importProvidersFrom, Provider} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {getComponentLoaderProviders, registerButtonIcons} from "@jamesbenrobb/ui";
import {getSideMenuComponentProviders} from "./components/side-menu-loader/side-menu-loader.providers";
import {getMenuProviders} from "./providers/menu.providers";
import {AppShellSettings, AppShellSettingsService} from "./app.settings";
import {DEFAULT_SIDE_MENU_COMPONENT} from "./components/side-menu-loader/side-menu-loader.directive";


export function getJBRAppShellProviders(settings?: AppShellSettings): (Provider | EnvironmentProviders)[] {
  return [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule
    ),
    getMenuProviders(),
    getComponentLoaderProviders(),
    getSideMenuComponentProviders(),
    registerButtonIcons('assets/icons/'),
    {
      provide: AppShellSettingsService,
      useValue: {
        displayColorModeBtn: settings?.displayColorModeBtn ?? true,
        displayBreadcrumbs: settings?.displayBreadcrumbs ?? true,
        displaySearchInput: settings?.displaySearchInput ?? true,
        sideMenuComponentType: settings?.sideMenuComponentType ?? DEFAULT_SIDE_MENU_COMPONENT
      }
    }
  ];
}
