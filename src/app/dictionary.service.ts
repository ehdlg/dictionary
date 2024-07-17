import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dictionary } from '../../interfaces';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private static API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) {}

  get(word: string): Observable<Dictionary> {
    return this.http
      .get<Dictionary[]>(DictionaryService.API_URL + word)
      .pipe(map(([data]) => data));
  }
}
