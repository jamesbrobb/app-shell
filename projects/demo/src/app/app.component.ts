import { Component } from '@angular/core';
import {AppLayoutContainerComponent} from "@jamesbenrobb/app-shell";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppLayoutContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
