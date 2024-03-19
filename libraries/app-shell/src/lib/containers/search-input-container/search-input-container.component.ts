import {ChangeDetectionStrategy, Component, DestroyRef, effect, inject, viewChild} from '@angular/core';
import {SearchInputComponent} from "@jamesbenrobb/ui";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {debounceTime, filter, tap} from "rxjs";
import {AppShellSearchService} from "../../providers/search.providers";


@Component({
  selector: 'jbr-app-shell-search-input-container',
  standalone: true,
    imports: [
        SearchInputComponent
    ],
  templateUrl: './search-input-container.component.html',
  styleUrl: './search-input-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputContainerComponent {

  readonly searchInput = viewChild.required(SearchInputComponent);

  readonly #searchService = inject(AppShellSearchService);
  readonly #destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      this.searchInput().value.pipe(
        filter(arg => arg.length === 0 || arg.length > 3),
        debounceTime(200),
        tap(arg => this.#searchService.search(arg)),
        takeUntilDestroyed(this.#destroyRef)
      ).subscribe();
    });
  }
}
