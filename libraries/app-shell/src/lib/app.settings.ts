import {InjectionToken} from "@angular/core";
import {DEFAULT_SIDE_MENU_COMPONENT} from "./components/side-menu-loader/side-menu-loader.directive";


export type AppShellSettings = {
  displayColorModeBtn?: boolean,
  displayBreadcrumbs?: boolean,
  displaySearchInput?: boolean,
  sideMenuComponentType?: string
}

export const AppShellSettingsService = new InjectionToken<AppShellSettings>('AppSettings', {
  factory: () => ({
    displayColorModeBtn: true,
    displayBreadcrumbs: true,
    displaySearchInput: true,
    sideMenuComponentType: DEFAULT_SIDE_MENU_COMPONENT
  })
});
