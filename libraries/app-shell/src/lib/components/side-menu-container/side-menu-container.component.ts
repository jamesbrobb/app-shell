import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";

import {SideMenuLoaderDirective} from "../side-menu-loader/side-menu-loader.directive";
import {AppShellSettingsService} from "../../app.settings";
import {MenuService} from "../../core/menu/menu.service";


@Component({
  selector: 'jbr-app-shell-side-menu-container',
  standalone: true,
  imports: [
    SideMenuLoaderDirective,
    AsyncPipe
  ],
  templateUrl: './side-menu-container.component.html',
  styleUrl: './side-menu-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuContainerComponent {

  protected readonly menuService = inject(MenuService);
  protected readonly menuComponentType = inject(AppShellSettingsService).sideMenuComponentType;
}
