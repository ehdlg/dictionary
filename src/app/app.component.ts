import { Component, OnInit } from '@angular/core';
import { DictionaryService } from './dictionary.service';
import { Dictionary } from '../../interfaces';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { WordComponent } from './word/word.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';

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
  ],
  template: `
    <main class="flex max-w-xl mx-auto flex-col gap-8 m-16">
      <app-header />
      <app-search (wordEvent)="updateWord($event)" />
      <app-word [data$]="data$" />
    </main>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  static DEFAULT_WORD = 'keyboard';
  public data$!: Observable<Dictionary>;
  public word: string;

  constructor(private service: DictionaryService) {
    this.word = AppComponent.DEFAULT_WORD;
  }

  private updateWordObservable(newWord: string) {
    this.data$ = this.service.get(newWord);
    this.word = '';
  }

  ngOnInit() {
    this.updateWordObservable(this.word);
  }

  updateWord(newWord: string) {
    this.updateWordObservable(newWord);
  }
}
