import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharacterServiceService } from 'src/app/services/character-service.service';
import {faTv} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-detailcharacter',
  templateUrl: './detailcharacter.component.html',
  styleUrls: ['./detailcharacter.component.css']
})
export class DetailcharacterComponent implements OnInit {
  arrPj: Character[] = []
  id: number ;
  tv = faTv;
  constructor(private pjService: CharacterServiceService, private activateRoute:  ActivatedRoute) {

    this.id = 0;

   }

  ngOnInit(): void {
    this.getParam()
    this.getDetailPj()

  }

  private getDetailPj(): void{
    this.pjService.getCharacterId(this.id).subscribe((response: any) =>{

      this.arrPj.push(response)

    })
  }

  private getParam(): void{
    this.activateRoute.paramMap.subscribe( (paramMap:any) =>
    {
      const {params} = paramMap;
      this.id = params.id;
    });
  }

  protected episodeData(id:string): void{
    const parts = id.split('/');
    const lastPart = parts[parts.length - 1];
    //return lastPart.replace('/', '|');console.log(id);
    console.log(lastPart);
  }

}
