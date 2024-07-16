import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1
    class="text-center text-3xl font-bold text-underline text-slate-800 mt-8"
  >
    Dictionary!
  </h1> `,
  styles: [],
})
export class AppComponent {
  title = 'dictionary';
}
