import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, inject,
  viewChild
} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MediaMatcher} from "@angular/cdk/layout";
import {DarkModeBtnComponent} from "@jamesbenrobb/ui";

import {AppShellSettingsService} from "../../app.settings";
import {SideMenuContainerComponent} from "../../containers/side-menu-container/side-menu-container.component";
import {BreadcrumbsContainerComponent} from "../../containers/breadcrumbs-container/breadcrumbs-container.component";


@Component({
  selector: 'jbr-app-shell-layout-container',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    SideMenuContainerComponent,
    DarkModeBtnComponent,
    BreadcrumbsContainerComponent
  ],
  templateUrl: './app-layout-container.component.html',
  styleUrl: './app-layout-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutContainerComponent {

  readonly sidenav = viewChild.required(MatSidenav);

  readonly #mobileQueryListener: () => void;

  protected readonly appSettings = inject(AppShellSettingsService);
  protected readonly mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.#mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.#mobileQueryListener);
  }

  ngOnInit(): void {

    if(this.mobileQuery.matches) {
      return;
    }

    this.sidenav().open();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.#mobileQueryListener);
  }
}