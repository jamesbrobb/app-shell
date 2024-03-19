import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AsyncPipe} from "@angular/common";

import {AppShellSettingsService} from "../../app.settings";
import {MenuService} from "../../core/menu/menu.service";
import {SideMenuLoaderDirective} from "../../directives/side-menu-loader/side-menu-loader.directive";


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
