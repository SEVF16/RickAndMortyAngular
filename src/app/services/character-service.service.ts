import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
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



  getCharacter(pPage = 1): Promise <any>{
    return firstValueFrom(this.htpp.get<any>(`${this.url}?page=${pPage}`))

  }

  getCharacterFilter(): Promise <any>{
    return firstValueFrom(this.htpp.get<any>(`${this.url}?status=dead`))

  }

  getByStatus(pStatus?: string , pPage: number = 1 ): Promise<any>{
    if (pStatus === 'status' || pStatus === '') {
      return this.getCharacter(pPage)
    } else {
      return firstValueFrom(this.htpp.get<any>(`${this.url}/?name=rick&status=${pStatus}&page=${pPage}`))
    }


  }

  getById(idCharacter: number): Promise<any>{
    return firstValueFrom(this.htpp.get<any>(`${this.url}/${idCharacter}`))
  }

}

