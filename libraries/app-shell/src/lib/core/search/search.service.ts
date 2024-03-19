import {Observable} from "rxjs";


export interface SearchService<T> {
  search(query: string): void;
  results$: Observable<T[]>;
}


export class NoOpSearchService<T> implements SearchService<T> {
  search(query: string): void {}
  results$: Observable<T[]> = new Observable<T[]>();
}
