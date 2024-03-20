import {InjectionToken} from "@angular/core";
import {SearchService} from "../core";


export const AppShellSearchService = new InjectionToken<SearchService<any>>('AppShellSearchService');
