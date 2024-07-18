import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form
      (submit)="onSubmit()"
      class="w-full flex bg-slate-100 dark:bg-slate-700 border border-transparent rounded-xl outline-none text-2xl mx-auto p-3 focus:shadow-md transition ease-in duration-250"
    >
      <input
        [(ngModel)]="word"
        type="text"
        id="word"
        class="w-full bg-slate-100 dark:bg-slate-700 border border-transparent rounded-xl outline-none text-2xl mx-auto"
        [ngModelOptions]="{ standalone: true }"
      />
      <button class="appearance-none" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 text-purple-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  `,
  styles: ``,
})
export class SearchComponent {
  public word!: string;
  @Output() wordEvent = new EventEmitter<string>();

  onSubmit() {
    this.wordEvent.emit(this.word);
    this.word = '';
  }
}
