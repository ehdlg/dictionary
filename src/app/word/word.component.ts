import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DictionaryService } from '../dictionary.service';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { Dictionary } from '../../../interfaces';

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [AsyncPipe],
  template: ` @if(data$ | async; as data){
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-1 ">
        <h2 class="text-6xl">{{ data.word }}</h2>
        <h3 class="text-3xl text-purple-500">{{ data.phonetic }}</h3>
      </div>

      <div>
        <button
          class="disabled:opacity-25 disabled:cursor-not-allowed"
          [disabled]="data.phonetics[0].audio == ''"
        >
          Play audio
        </button>
        <audio [src]="data.phonetics[0].audio">Play</audio>
      </div>
    </div>
    <ul class="list-decimal mx-auto flex flex-col gap-4 text-xl">
      @for(meaning of data.meanings; track 1){ @for(definition of
      meaning.definitions; track definition.definition){
      <li class="text-2xl text-slate-800">{{ definition.definition }}</li>
      } }
    </ul>
    }`,
  styles: ``,
})
export class WordComponent implements OnChanges {
  @Input() word!: string | null;
  private wordSubject = new BehaviorSubject<string | null>(null);
  public data$: Observable<Dictionary | null>;

  constructor(private service: DictionaryService) {
    this.data$ = this.wordSubject.pipe(
      switchMap((word) => (word ? this.service.get(word) : of(null)))
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['word']) {
      this.wordSubject.next(this.word);
    }
  }
}
