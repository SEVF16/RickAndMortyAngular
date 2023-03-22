import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, Observable, retry, Subject, tap} from 'rxjs';
import { Character } from '../models/character.model';



@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  url: string;
  arrpj: Character[] = [];
  constructor(private htpp: HttpClient) {
    this.arrpj = []

    this.url = "https://rickandmortyapi.com/api/character?page=";
  }



  getCharacter(q = '',pPage = 1 ){
    console.log(q);
    // console.log(pPage);
    // console.log(this.htpp.get<Character[]>(`${this.url}${pPage}&name=${q}`).pipe(map(response => response)));
    let urlBase = `${this.url}${pPage}`
    if (q) {
      urlBase+= `&name=${q}`
    }

    return this.htpp.get(urlBase)
  }

  getCharacterFilterPage(pPage: number): Observable<Character[]>{
    //console.log(this.htpp.get<Character[]>(`${this.url}?page=${pPage}`).subscribe((res:any) => {const{info, results} = res; this.arrpj = [...this.arrpj, ...results]
    //console.log(this.arrpj);
  //}));
    return this.htpp.get<Character[]>(`${this.url}?page=${pPage}`);

  }

  getCharacterId(id:number): Observable<Character[]>{
    return this.htpp.get<Character[]>(`${this.url}/${id}`)
  }

  // getCharacterFilter(query?: string): Promise <any>{
  //   return firstValueFrom(this.htpp.get<any>(`${this.url}?name=${query}`))

  // }


}

