import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Character } from '../models/character.model';



@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  url: string;
  arrpj: Character[] = [];
  constructor(private htpp: HttpClient) {
    this.arrpj = []

    this.url = "https://rickandmortyapi.com/api/character";
  }



  getCharacter(q = '', Filter: {
    name?: string;
    status?: string;
    species?: string;
    gender?: string;}, pPage = 1 ): Observable<Character[]>{
    let urlBase = `https://rickandmortyapi.com/api/character?page=${pPage}`
    if (q) {
      urlBase+= `&name=${q}`
    }if(Filter.status){
      urlBase+= `&status=${Filter.status}`
    }if(Filter.gender){
      urlBase+= `&gender=${Filter.gender}`
    }

    return this.htpp.get<Character[]>(urlBase)
  }



  getCharacterId(id:number): Observable<Character[]>{
    //console.log(this.htpp.get<Character[]>(`${this.url}/${id}`));
    return this.htpp.get<Character[]>(`${this.url}/${id}`)
  }




}

