import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Dictionary } from '../../../interfaces';
import { PlayButtonComponent } from '../play-button/play-button.component';

@Component({
  selector: 'app-word',
  standalone: true,
  imports: [AsyncPipe, PlayButtonComponent, JsonPipe],
  template: ` @if(data$ | async; as data){
    <div class="flex justify-between items-center gap-4">
      <div class="flex flex-col gap-2 ">
        <h2 class="text-6xl font-bold">{{ data.word }}</h2>
        <h3 class="text-2xl text-purple-500">{{ data.phonetic }}</h3>
      </div>

      <app-play-button
        class="text-purple-700 text-2xl bg-purple-200 p-2 rounded-full disabled:cursor-not-allowed disabled:opacity-20 "
        [onClick]="playAudio"
        [disabled]="data.phonetics[0].audio == ''"
      />
      <audio id="audio-element" [src]="data.phonetics[0].audio">Play</audio>
    </div>
    @for(meaning of data.meanings; track meaning.partOfSpeech){
    <div class="flex gap-6 items-center justify-between mt-4">
      <p class="font-bold text-xl">{{ meaning.partOfSpeech }}</p>
      <div class="w-full h-[1px] bg-gray-200"></div>
    </div>
    <ul
      class="flex flex-col gap-4 text-xl list-disc m-6  text-gray-700 mx-auto"
    >
      <p class="text-gray-500">Meaning</p>
      @for(definition of meaning.definitions; track definition.definition){
      <li class="pl-2 text-purple-500">
        <span class="text-gray-700">{{ definition.definition }}</span>
      </li>
      }
    </ul>

    }
    <div class="h-[1px] bg-gray-200 w-full my-6"></div>
    <p class="text-gray-600">
      Source:
      <a
        [href]="data.sourceUrls[0]"
        target="_blank"
        class="underline cursor-pointer"
        >{{ data.sourceUrls[0] }}</a
      >
    </p>
    }`,
  styles: ``,
})
export class WordComponent {
  @Input() data$!: Observable<Dictionary | null>;

  playAudio() {
    const audioElement = document.getElementById('audio-element');

    if (null != audioElement && audioElement instanceof HTMLAudioElement) {
      audioElement.play();
    }
  }
}
