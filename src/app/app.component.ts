import { Component } from '@angular/core';
import { DictionaryService } from './dictionary.service';
import { Dictionary } from '../../interfaces';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { WordComponent } from './word/word.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, FormsModule, WordComponent],
  template: `
    <main class="flex max-w-xl mx-auto flex-col gap-8 m-16">
      <h1 class="text-center text-3xl font-bold text-underline text-slate-800">
        Dictionary!
      </h1>
      <form (submit)="onSubmit()">
        <input
          [(ngModel)]="word"
          type="text"
          id="word"
          class="w-full bg-gray-50 border border-transparent rounded-xl outline-none text-2xl mx-auto p-3 focus:shadow-md transition ease-in duration-250"
          [ngModelOptions]="{ standalone: true }"
        />
        <button class="hidden" type="submit">Submit</button>
      </form>

      <app-word [word]="sendWord" />
    </main>
  `,
  styles: [],
})
export class AppComponent {
  public data$!: Observable<Dictionary>;
  public word = 'keyboard';
  protected sendWord: string | null = null;

  constructor(private service: DictionaryService) {}

  onSubmit() {
    this.data$ = this.service.get(this.word);
    this.sendWord = this.word;
    this.word = '';
  }
}
