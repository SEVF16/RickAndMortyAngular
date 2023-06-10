import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, NavigationEnd, ParamMap, Params, Router } from '@angular/router';
import { CharacterServiceService } from 'src/app/services/character-service.service';
import { filter,} from 'rxjs';
import { Character } from 'src/app/models/character.interface';
import { Filter } from 'src/app/models/filter.interface';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{
  arrPj: Character[] = [];
  pjR: any[] = [];
  currentPage: number = 1;
  filterapi: {
    name?: '',
    status?: '',
  species?: '',
  gender?: '',
  } = {};
  status: any = [];
  id: number | null = null ;
  query: string;
  pages: [] = [];
  pageNumber:any;
  constructor(private pjService: CharacterServiceService,
    private router: Router, private actRouter: ActivatedRoute,) {

      this.query = '';
      this.urlChanged();
     }


  async ngOnInit() {
    this.getDataService();



  }



private urlChanged(): void{
  this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)).subscribe(
      () => {
        this.arrPj=[];
        this.currentPage;
        this.getCharactersByQuery();
      }
    )
}
private getCharactersByQuery(): void{
  this.actRouter.queryParams.pipe().subscribe((params : Params) =>{
    this.filterapi.name = params['q'];
    this.currentPage = this.currentPage;
    this.getDataService();
  });

}

private getDataService(pPage?: number): void{


  this.pjService.getDataService(this.filterapi,this.currentPage).subscribe((response: any) => {

    this.arrPj = response.results;
    this.pageNumber = response.info['pages'];



    });
  }

changePage(siguiente: boolean) {
    if (siguiente) {
      this.currentPage++;
      this.getDataService()
    }else{
      this.currentPage--;
      this.getDataService()
    }

  }

  viewDetail(pId: number): void {
    this.router.navigate(['/detailCharacter/',pId]);
  }

  onStatus($event?: any, ){
    let filter = $event.target.name
    this.status = $event.target.value;
    if (filter === 'gender') {
      this.filterapi.gender = $event.target.value;
    }if (filter === 'Status') {
      this.filterapi.status = $event.target.value;
    }if (filter === 'species') {
      this.filterapi.species = $event.target.value;
    }
    this.getDataService();
  }
}







