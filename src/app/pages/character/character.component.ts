import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CharacterServiceService } from 'src/app/services/character-service.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  arrPj: any[] = [];
  pjR: any[] = [];
  currentPage: number;
  numPage: number;
  status: string = '';
  id: number | null = null ;
  query: string;
  constructor(private pjService: CharacterServiceService,
    private router: Router, private actRouter: ActivatedRoute) {
      this.pjR = [];
      this.currentPage = 1;
      this.numPage = 0;
      this.query = '';
     }

  async ngAfterViewInit() {
    await this.pjService.getCharacter().then(response => {
      this.arrPj = response['results']
      this.numPage = response['info']['pages']
     });

  }
  async ngOnInit() {
    await this.pjService.getCharacterFilter().then(response => {
      console.log(response['results']);
    })
  }

// private getCharactersByQuery(): void{

//   this.actRouter.queryParams.pipe(
//     take(1)).subscribe((params: ParamMap) => {
//       this.query = params['q'];
//     })
// }

async onStatus($event?: any, ){
  this.status = $event.target.value
  if (this.currentPage <= this.numPage ) {
    this.currentPage = 1
    if (this.status === $event.target.value) {
      const response =  await this.pjService.getByStatus(this.status ,this.currentPage)
      this.arrPj = response['results']
      this.numPage = response['info']['pages']
  }
  }
}
async changePage(siguiente: boolean) {
    if (siguiente) {
      this.currentPage++;
     // console.log( this.currentPage+ '/'+this.numPage);
    }else{
      this.currentPage--;
    }
  const response =  await this.pjService.getByStatus(this.status,this.currentPage)
  this.arrPj = response['results']
}

  viewDetail(pId: number): void {
    console.log(pId);
    this.router.navigate(['/web/', pId]);
  }

}

