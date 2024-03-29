import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { CharacterServiceService } from 'src/app/services/character-service.service';
import {faTv, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { ModalService } from 'src/app/services/modal.service';
import { Episode } from 'src/app/models/episode.interface';
@Component({
  selector: 'app-detailcharacter',
  templateUrl: './detailcharacter.component.html',
  styleUrls: ['./detailcharacter.component.css']
})
export class DetailcharacterComponent implements OnInit {
  arrPj: Character[] = []
  episode: Episode[] = []
  id: number ;
  tv = faTv;
  back = faArrowLeft;
  showPopup: boolean;
  constructor(private pjService: CharacterServiceService, private activateRoute:  ActivatedRoute, protected popupService: ModalService, private location: Location ) {
    this.showPopup = false;
    this.id = 0;

   }

  ngOnInit(): void {
    this.getParam()
    this.getDetailPj()

  }

  goBack(): void {
    this.location.back();
  }

  private getDetailPj(): void{
    this.pjService.getCharacterId(this.id).subscribe((response: any) =>{

      this.arrPj = [response];

    })
  }

  private getParam(): void{
    this.activateRoute.paramMap.subscribe( (paramMap:any) =>
    {
      const {params} = paramMap;
      this.id = params.id;
    });
  }

  mostrarInformacion(id:string) {
    const parts = id.split('/');
    const lastPart = parts[parts.length - 1];
    const data = lastPart;
    this.popupService.getDataEpisode(data).subscribe(([datosEpisodio, characters]) => {
      const nombresPersonajes = characters.map((character: Character) => character.name);
      this.popupService.openModal(datosEpisodio, nombresPersonajes);
    });

  }



}
