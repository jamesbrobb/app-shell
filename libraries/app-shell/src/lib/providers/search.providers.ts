import {InjectionToken} from "@angular/core";
import {NoOpSearchService, SearchService} from "../core/search/search.service";


export const AppShellSearchService = new InjectionToken<SearchService<any>>('AppShellSearchService', {
  providedIn: 'root',
  factory: () => {
    console.warn('No search service provided through AppShellSearchService Token');
    return new NoOpSearchService();
  }
})
