import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  template: `
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
  `,
  styles: ``,
})
export class SearchComponent {
  public word!: string;
  @Output() wordEvent = new EventEmitter<string>();

  onSubmit() {
    this.wordEvent.emit(this.word);
  }
}
