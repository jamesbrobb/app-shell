import { Component } from '@angular/core';
import { AppShellLayoutComponent } from '@jamesbenrobb/app-shell';
import {AppContentContainerComponent} from "@jamesbenrobb/dynamic-routes-ngx";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppShellLayoutComponent,
    AppContentContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
