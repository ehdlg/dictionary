import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  template: `
    <header class="flex w-full justify-between">
      <div class="logo">This would be the logo</div>
      <div class="flex gap-4">
        <div class="grid items-center justify-center">
          <select
            name="fonts"
            id="fonts"
            class="appearance-none row-start-1 col-start-1 text-xl bg-transparent cursor-pointer capitalize"
            [(ngModel)]="selectedFont"
            (change)="updateFont($event)"
          >
            @for (entries of fontEntries; track entries[0]) {
            <option [value]="entries[1]">
              {{ entries[0] }}
            </option>
            }
          </select>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="row-start-1 col-star-1 text-purple-500"
          >
            <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
          </svg>
        </div>

        <button (click)="toggleDarkMode()">Toggle Dark mode</button>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  private static htmlElement = document.documentElement;
  public static readonly FONTS = {
    serif: 'font-serif',
    mono: 'font-mono',
    sans: 'font-sans',
  } as const;
  public static DEFAULT_FONT = HeaderComponent.FONTS.serif;

  public selectedFont = HeaderComponent.getSelectedFont();
  public darkMode: boolean =
    HeaderComponent.htmlElement.classList.contains('dark');

  get fonts() {
    return HeaderComponent.FONTS;
  }

  get fontValues() {
    return Object.values(this.fonts);
  }

  get fontEntries() {
    return Object.entries(this.fonts);
  }

  private static getSelectedFont(): string {
    const bodyClasses = document.body.classList;

    for (const font of Object.values(HeaderComponent.FONTS)) {
      if (bodyClasses.contains(font)) {
        return font;
      }
    }

    return HeaderComponent.DEFAULT_FONT;
  }

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

  public updateFont(event: Event) {
    if (!(event.target instanceof HTMLSelectElement)) return;

    const bodyClasses = document.body.classList;
    const newFont = event.target.value;

    for (const value of Array.from(bodyClasses)) {
      console.log(value, this.fontValues);
      if ((this.fontValues as string[]).includes(value)) {
        bodyClasses.replace(value, newFont);

        return;
      }
    }

    return bodyClasses.add(newFont);
  }
}
