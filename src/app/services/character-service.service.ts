import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable, switchMap, tap} from 'rxjs';
import { Character } from '../models/character.interface';



@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  url: string;
  arrpj: Character[] = [];

  constructor(private http: HttpClient) {
    this.arrpj = []

    this.url = "https://rickandmortyapi.com/api/character";
  }



  getDataService(Filter: {
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
  }, pPage = 1): Observable<Character[]> {
    let urlBase = 'https://rickandmortyapi.com/api/character';

    let params = new HttpParams();

    if (Filter.name) {
      params = params.set('name', Filter.name);
    }
    if (Filter.status && Filter.status !== 'All') {
      params = params.set('status', Filter.status);
    }
    if (Filter.gender && Filter.gender !== 'All') {
      params = params.set('gender', Filter.gender);
    }
    if (Filter.species && Filter.species !== 'All') {
      params = params.set('species', Filter.species);
    }

    return this.http.get<Character[]>(urlBase, { params }).pipe(
      switchMap((response: any) => {
        const totalPages = response.info.pages;
        pPage = Math.min(pPage, totalPages);

        params = params.set('page', pPage.toString());
        return this.http.get<Character[]>(urlBase, { params });
      })
    );
  }




  getCharacterId(id:number): Observable<Character>{

    return this.http.get<Character>(`${this.url}/${id}`)
  }


  getFilters(): Observable<any> {
    return this.http
      .get('https://rickandmortyapi.com/api/character')


  }
}




