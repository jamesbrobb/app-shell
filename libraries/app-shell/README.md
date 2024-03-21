# App Shell
<br/>

# What.

A simple, configurable, app template using Angular Material components.

Decoupled from content and router.

What you get:

- colour mode button
- breadcrumbs
- search box
- header slot
- content slot
- styleable


### Demos

[Empty shell.](https://app-shell.jamesrobb.work/demo/)

![empty shell demo image](images/demo.jpg)

[Concrete angular routes.](https://app-shell.jamesrobb.work/concrete-routes-demo/)

![concrete angular routes demo image](images/concrete-demo.png)

[Dynamic routes](https://app-shell.jamesrobb.work/dynamic-routes-demo/)

![dynamic routes demo image](images/dynamic-demo.png)

<br/>

# Why.

Whilst creating Documentor (which required dynamic/configurable routes) it occurred to me that it may be useful to abstract out the underlying implementation/behaviour to use for other apps. So i did.
<br/><br/>


# How.

1. [Install](#install)
2. [Include styles](#include-styles)
3. [Add providers](#add-providers)
4. [Add the layout component](#add-the-layout-component)
5. [Configure for your own use](#configure-for-your-own-use)
   <br/><br/>


### Install

```bash
npm i @jamesbenrobb/app-shell@latest
```
<br/>


### Include styles

```scss
@use "@jamesbenrobb/app-shell" as app-shell;

@include app-shell.setJBRAppShellVars();
```
<br/>


### Add providers

```ts
import {ApplicationConfig} from '@angular/core';
import {getJBRAppShellProviders} from "@jamesbenrobb/app-shell";


export const appConfig: ApplicationConfig = {
  providers: [
    getJBRAppShellProviders()
  ]
};
```
<br/>


### Add the layout component

```ts
import { Component } from '@angular/core';
import {AppShellLayoutComponent} from "@jamesbenrobb/app-shell";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppShellLayoutComponent
  ],
  template: `
    <jbr-app-shell-layout>
    </jbr-app-shell-layout>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {}
```
<br/>


# Configure for your own use.

1. [Provider options](#provider-options)
2. [Header slot]()
3. [Content slot]()
4. [Add your own side menu]()
5. [Configure menu]() // AppShellMenuConfigService - AppShellRouteManagerService
6. [Search input]() // AppShellSearchService
6. [Declare your own light and dark themes]()

1. [Provider options](#provider-options)
2. [Add your own content component](#add-your-own-content-component)
3. [Add your own side menu](#add-your-own-side-menu)
4. [Add your own header content](#add-your-own-header-content)
5. [Declare your own light and dark themes](#declare-your-own-light-and-dark-themes)
   <br/><br/>

### Provider options

```ts
export type AppShellOptions = {
  displayColorModeBtn?: boolean,
  displayBreadcrumbs?: boolean,
  sideMenuComponentType?: string
}
```
<br/>

### Add your own side menu

By default a mildly modified version of `mat-tree` is used.
If you wish to supply your own menu first create a menu component that implements [`SideMenuComponentIO`](https://github.com/jamesbrobb/dynamic-routes-app/blob/main/libraries/dynamic-routes-ngx/src/lib/components/side-menu-loader/side-menu-loader.directive.ts#L8)

```ts
import {Component, Input, Output} from "@angular/core";
import {SideMenuComponentIO, MenuItemNode} from "@jamesbenrobb/dynamic-routes-app";


@Component({
  selector: 'my-side-menu',
  templateUrl: '...',
  styleUrls: ['...'],
  standalone: true
})
export class MySideMenuComponent implements SideMenuComponentIO {
  @Input() menuNodes?: MenuItemNode[];
  @Input() currentNodes?: MenuItemNode[];

  @Output() nodeSelected = new EventEmitter<MenuItemNode>();
}
```

Register the component with the `ComponentLoaderMapService` (see details on registering components [here](https://github.com/jamesbrobb/jbr/tree/main/libraries/ui/src/lib/component-loader)) and add the provider to your app

```ts
import {Provider} from "@angular/core";
import {ComponentLoaderMapService} from "@jamesbenrobb/ui";


const provider: Provider = {
  provide: ComponentLoaderMapService,
  useValue: {
    'my-side-menu': {
      import: () => import('./my-side-menu.component'),
      componentName: 'MySideMenuComponent'
    }
  },
  multi: true
}
```
Supply the registered name of you side menu component to `getJBRDRAAppProviders`

```ts
import {ApplicationConfig} from '@angular/core';
import {getJBRDRAAppProviders} from "@jamesbenrobb/dynamic-routes-ngx";


export const appConfig: ApplicationConfig = {
  providers: [
    ...getJBRDRAAppProviders(
      'assets/route-config.json',
      {
        appName: 'My app name',
        sideMenuComponentType: 'my-side-menu'
      }
    )
  ]
};
import {ApplicationConfig} from '@angular/core';
import {getJBRAppShellProviders} from "@jamesbenrobb/app-shell";


export const appConfig: ApplicationConfig = {
  providers: [
    getJBRAppShellProviders()
  ]
};
```
<br/>

### Add your own header content

The header has a content slot that can be used to project bespoke content.

```html
<jbr-app-shell-layout>
  <div jbr-dra-toolbar-content>I'm the header text</div>
</jbr-app-shell-layout>
```
<br/>

### Declare your own light and dark themes

Approximately 90% of the app uses Angular Material components and the other 10% also support being themed.

To supply your own themes the `setJBRAppShellVars` mixin has the following optional arguments:

```scss
@use '@angular/material' as mat;
@use "@jamesbenrobb/app-shell" as app-shell;

@include app-shell.setJBRAppShellVars(
    $light-theme, // an Angular material light theme created with mat.define-light-theme
    $dark-theme, // an Angular material dark theme created with mat.define-dark-theme
    $typography, // an Angular material typography config created with mat.define-typography-config
    $side-menu-width // a custom width for the side menu - defaults to 320px
);
```
The app also comes with a light/dark mode switch that sets a `data-*` attribute on body.
When explicitly selected, the switch also stores the users preference in `LocalStorage`, overriding the mode of the OS.
The following can be used to style your own components
```html
<body [data-color-mode]="light">
...
</body>
```
or
```html
<body [data-color-mode]="dark">
...
</body>
```

