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
  constructor(private pjService: CharacterServiceService, private activateRoute:  ActivatedRoute) { }
  id: any;
  tv = faTv;
  ngOnInit(): void {

    this.activateRoute.paramMap.subscribe( (paramMap:any) =>
    {
      const {params} = paramMap;
      this.id = params.id;
    });


    this.pjService.getCharacterId(this.id).subscribe((response: any) =>{

      this.arrPj.push(response)
      console.log(this.arrPj);
    })

  }

}
