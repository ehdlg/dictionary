import { Component, Input } from '@angular/core';
import { ErrorObject } from '../../../interfaces';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (error$ | async; as error) {
    <div
      class="flex flex-col w-4/6 gap-2 bg-slate-100 dark:bg-slate-700 border border-red-500 p-6 justify-center items-center rounded-xl mx-auto  text-center text-xl"
    >
      <h2 class="text-3xl font-bold">Error:</h2>
      <h3 class="text-2xl font-bold ">{{ error.title }}</h3>
      <p>{{ error.message }}</p>
      <p>{{ error.resolution }}</p>
    </div>

    }
  `,
})
export class ErrorComponent {
  @Input() error$!: Observable<ErrorObject | null>;
}
