import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Episode } from '../models/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalSubject = new Subject<boolean>();
  modalState$ = this.modalSubject.asObservable();
  private datosEpisodioSubject: BehaviorSubject<Episode> = new BehaviorSubject<any>(null);
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "https://rickandmortyapi.com/api/episode";

   }

  getDataEpisode(numeroEpisodio: string): Observable<Episode> {

    return this.http.get<Episode>(`${this.url}/${numeroEpisodio}`);
  }

  openModal(data: Episode) {
    this.modalSubject.next(true);
    this.datosEpisodioSubject.next(data);

  }

  getDataPop() {
    return this.datosEpisodioSubject.asObservable();
  }


  closeModal() {
    this.modalSubject.next(false);
  }




}
