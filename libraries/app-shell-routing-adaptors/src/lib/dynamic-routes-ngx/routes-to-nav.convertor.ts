import {NavConfig, NavItemNode} from "@jamesbenrobb/ui";
import {RouteNode, isContentNode, isParentNode, isRedirectNode} from "@jamesbenrobb/dynamic-routes";


export function convertRoutes(routeConfig: RouteNode<any>[]): NavConfig {

  return routeConfig
    .filter((routeNode) => !isRedirectNode(routeNode))
    .map((route) => parse(route));
}

function parse(route: RouteNode<any>, parentPath: string = ''): NavItemNode {

  const path = `${parentPath}/${route.path}`,
    label = route.label ?? route.path.split('-').join(' '),
    children = isParentNode(route) ? route.children.map((route) => parse(route, path)) : undefined;

  return {
    path,
    label,
    active: 0,
    children,
    hasContent: isContentNode(route)
  }
}
