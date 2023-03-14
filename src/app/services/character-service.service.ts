import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, Observable, retry} from 'rxjs';
import { Character } from '../models/character.model';



@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  url: string;
  arrpj: any;
  constructor(private htpp: HttpClient) {
    this.arrpj = {};

    this.url = "https://rickandmortyapi.com/api/character";
  }



  getCharacter(q = ''){
    return this.htpp.get<Character[]>(this.url);

  }

  // getCharacterFilter(query?: string): Promise <any>{
  //   return firstValueFrom(this.htpp.get<any>(`${this.url}?name=${query}`))

  // }


}

