import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private pjService: CharacterServiceService,
    private router: Router) {
      this.pjR = [];
      this.currentPage = 1;
      this.numPage = 0;
     }

  async ngAfterViewInit() {
    await this.pjService.getCharacter().then(response => {
      this.arrPj = response['results']
      this.numPage = response['info']['pages']

      console.log(this.arrPj);
     });

  }
  ngOnInit(): void {

  }



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

