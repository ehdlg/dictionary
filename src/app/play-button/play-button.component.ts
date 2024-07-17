import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-play-button',
  standalone: true,
  imports: [],
  template: `
    <button
      [class]="class"
      (click)="onClick()"
      aria-label="Play"
      [disabled]="disabled"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="size-10"
      >
        <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
      </svg>
    </button>
  `,
  styles: ``,
})
export class PlayButtonComponent {
  @Input() class!: string;
  @Input() onClick!: () => void;
  @Input() disabled!: boolean;
}
