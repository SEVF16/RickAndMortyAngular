import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterServiceService } from 'src/app/services/character-service.service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit {
  character$: Character[] = [];
  constructor(private route: ActivatedRoute, private characterService: CharacterServiceService, private location:Location) {
  }

  ngOnInit(): void {
    // this.route.params.pipe(take(1)).subscribe((params) => {
    //   const id = params['id'];
    //   this.characterService.getCharacterId(id).subscribe((res: any) => {
    //     this.character$ = res;
    //     console.log(this.character$);
    //   })
    // })
  }

}
