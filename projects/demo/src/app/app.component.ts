import { Component } from '@angular/core';
import {AppShellLayoutComponent} from "@jamesbenrobb/app-shell";
import {MatButton} from "@angular/material/button";
import {OverlayModule, Overlay} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {SearchPanelComponent} from "./components/search-panel/search-panel.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppShellLayoutComponent,
    MatButton,
    OverlayModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  readonly #overlay: Overlay;
  constructor(overlay: Overlay) {
    this.#overlay = overlay;
  }
  showOverlay() {
    const overlayRef = this.#overlay.create();
    const searchPortal = new ComponentPortal(SearchPanelComponent);
    overlayRef.attach(searchPortal);
  }
}
