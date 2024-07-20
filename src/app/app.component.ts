import { Component } from '@angular/core';
import { DictionaryService } from './dictionary.service';
import { Dictionary, CustomErrorEvent, ErrorObject } from '../../interfaces';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { catchError, EMPTY, Observable, of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { WordComponent } from './word/word.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    FormsModule,
    WordComponent,
    SearchComponent,
    HeaderComponent,
    ErrorComponent,
  ],
  template: `
    <main class="flex max-w-xl mx-auto flex-col gap-8 m-16">
      <app-header />
      <app-search (wordEvent)="updateWord($event)" />
      <app-error [error$]="error$" />
      <app-word [data$]="data$" />
    </main>
  `,
})
export class AppComponent {
  static DEFAULT_WORD = 'angular';
  public data$!: Observable<Dictionary>;
  public error$!: Observable<ErrorObject | null>;

  constructor(private service: DictionaryService) {
    this.error$ = of(null);
    this.updateWordObservable(AppComponent.DEFAULT_WORD);
  }

  private updateWordObservable(newWord: string) {
    this.data$ = this.service.get(newWord).pipe(
      catchError((error: CustomErrorEvent) => {
        this.error$ = of(error.error);

        return EMPTY;
      })
    );
  }

  updateWord(newWord: string) {
    this.error$ = of(null);
    this.updateWordObservable(newWord);
  }
}
