import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="flex w-full justify-between">
      <div class="logo">This would be the logo</div>
      <div class="options">
        <button (click)="toggleDarkMode()">Toggle Dark mode</button>
        <span>Dark mode: {{ this.darkMode ? 'true' : 'false' }}</span>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  private static htmlElement = document.documentElement;
  public darkMode: boolean =
    HeaderComponent.htmlElement.classList.contains('dark');

  public toggleDarkMode() {
    if (HeaderComponent.htmlElement.classList.contains('dark')) {
      this.darkMode = false;
      window.localStorage.setItem('theme', 'light');
    } else {
      this.darkMode = true;
      window.localStorage.setItem('theme', 'dark');
    }

    HeaderComponent.htmlElement.classList.toggle('dark');
  }
}
