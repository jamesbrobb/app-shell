import {Routes} from "@angular/router";
import {NavItemNode} from "@jamesbenrobb/ui";


export function convertRoutes(routes: Routes, parentPath: string = ''): NavItemNode[] {
  return routes.filter(route => route.path !== '**')
    .filter(route => route.path !== '')
    .filter(route => !route.redirectTo)
    .map(route => {

      const path = `${parentPath}/${route.path || ''}`;

      const node: NavItemNode = {
        path,
        label: (route.path || '').replaceAll('-', ' '),
        hasContent: true,
        active: 0
      }

      if(route.children) {
        node.children = convertRoutes(route.children, path);
      }

      return node;
    });
}
