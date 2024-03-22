# App Shell Routing Adaptors

# What.

Routing adaptors for [`@jamesbenrobb/app-shell`](https://github.com/jamesbrobb/app-shell/tree/main/libraries/app-shell)

# How.

### Standard Angular routes

Use [`getJBRAppShellAngularRouterProviders`](https://github.com/jamesbrobb/app-shell/blob/main/libraries/app-shell-routing-adaptors/src/lib/angular-router/providers.ts).

1) Converts the routes registered through `provideRouter(routes)` into a [`NavConfig`](https://github.com/jamesbrobb/jbr/blob/main/libraries/ui/src/lib/navigation/navigation.types.ts) 
2) Creates a route manager to enable/manage 2 way communication between the Angular Router and app shell navigation

[demo](https://app-shell.jamesrobb.work/concrete-routes-demo/) / [example source](https://github.com/jamesbrobb/app-shell/tree/main/projects/concrete-routes-demo/src/app)

```ts
import {ApplicationConfig} from "@angular/core";
import {provideRouter} from "@angular/router";
import {getJBRAppShellProviders} from "@jamesbenrobb/app-shell";
import {getJBRAppShellAngularRouterProviders} from "@jamesbenrobb/app-shell-routing-adaptors";
import {routes} from "app.routes";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    getJBRAppShellProviders(),
    getJBRAppShellAngularRouterProviders()
  ]
};
```
<br/><br/>

### Dynamic routes

For use with [`@jamesbenrobb/dynamic-routes-ngx`](https://github.com/jamesbrobb/dynamic-routes/tree/main/libraries/dynamic-routes-ngx)

[demo](https://app-shell.jamesrobb.work/dynamic-routes-demo/) / [example source](https://github.com/jamesbrobb/app-shell/tree/main/projects/dynamic-routes-demo/src/app)

```ts
import {ApplicationConfig} from "@angular/core";
import {provideRouter} from "@angular/router";
import {getJBRAppShellProviders} from "@jamesbenrobb/app-shell";
import {getJBRAppShellDynamicRoutesNgxProviders} from "@jamesbenrobb/app-shell-routing-adaptors";


export const appConfig: ApplicationConfig = {
  providers: [
    getJBRAppShellProviders(),
    getJBRAppShellDynamicRoutesNgxProviders(),
    getJBRDRAppProviders(
      'assets/route-config.json', {
        appName: 'Demo App'
      }
    )
  ]
};
```
