import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { CharacterServiceService } from 'src/app/services/character-service.service';
import {faTv} from '@fortawesome/free-solid-svg-icons'
import { ModalService } from 'src/app/services/modal.service';
import { Episode } from 'src/app/models/episode.interface';
@Component({
  selector: 'app-detailcharacter',
  templateUrl: './detailcharacter.component.html',
  styleUrls: ['./detailcharacter.component.css']
})
export class DetailcharacterComponent implements OnInit {
  arrPj: Character[] = []
  id: number ;
  tv = faTv;
  showPopup: boolean;
  constructor(private pjService: CharacterServiceService, private activateRoute:  ActivatedRoute, protected popupService: ModalService ) {
    this.showPopup = false;
    this.id = 0;

   }

  ngOnInit(): void {
    this.getParam()
    this.getDetailPj()

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
    this.popupService.getDataEpisode(data).subscribe((datosEpisodio: Episode) => {
      this.popupService.openModal(datosEpisodio);
    });
  }



}
