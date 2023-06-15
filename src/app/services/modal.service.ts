import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, forkJoin, map, of, switchMap } from 'rxjs';
import { Episode } from '../models/episode.interface';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSubject = new Subject<boolean>();
  modalState$ = this.modalSubject.asObservable();
  private datosEpisodioSubject: BehaviorSubject<Episode> = new BehaviorSubject<any>(null);
  private datosCharacterSubject: BehaviorSubject<string[]> = new BehaviorSubject<any>(null);
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "https://rickandmortyapi.com/api/episode";

   }

   getDataEpisode(numeroEpisodio: string): Observable<[Episode, Character[]]> {
    const urlEpisode = `${this.url}/${numeroEpisodio}`;

    return this.http.get<Episode>(urlEpisode).pipe(
      switchMap((episode: Episode) => {
        return this.getCharacterData(episode).pipe(
          map((characters: Character[]) => {
            return [episode, characters] as [Episode, Character[]]; // Asegura el tipo de retorno como [Episode, Character[]]
          })
        );
      })
    );
  }


  getCharacterData(episode: Episode): Observable<Character[]> {
    const characterUrls = episode.characters;
    const lastNumbers = this.getLastNumbersFromUrls(characterUrls);
    const characterIds = this.joinLastNumbers(lastNumbers);
    const pjUrl = "https://rickandmortyapi.com/api";
    const urlCharacters = `${pjUrl}/character/${characterIds}`;

    return this.http.get<Character[]>(urlCharacters);
  }

  getLastNumbersFromUrls(characterUrls: string[]): number[] {
    return characterUrls.map((url: string) => {
      const urlParts = url.split('/');
      const lastPart = urlParts[urlParts.length - 1];
      return parseInt(lastPart, 10);
    });
  }

  joinLastNumbers(numbers: number[]): string {
    return numbers.join(',');
  }


  openModal(data: Episode, namePj: string[]) {
    this.modalSubject.next(true);
    this.datosEpisodioSubject.next(data);
    this.datosCharacterSubject.next(namePj)

  }

  getDataPop() {
    return this.datosEpisodioSubject.asObservable();
  }

  getDataPopCharacter() {
    return this.datosCharacterSubject.asObservable();
  }


  closeModal() {
    this.modalSubject.next(false);
  }




}
