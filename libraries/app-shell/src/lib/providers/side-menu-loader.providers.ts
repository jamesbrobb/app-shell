import {EnvironmentProviders, makeEnvironmentProviders} from "@angular/core";
import {ComponentLoaderMapService} from "@jamesbenrobb/ui";


export function getSideMenuLoaderComponentProviders(): EnvironmentProviders {

  return makeEnvironmentProviders([{
    provide: ComponentLoaderMapService,
    useValue:  {
      'default-side-menu': {
        import: () => import('../components/side-menu/side-menu.component'),
        componentName: 'SideMenuComponent'
      }
    },
    multi: true
  }]);
}
