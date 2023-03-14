import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { CharacterServiceService } from 'src/app/services/character-service.service';
import { filter, take} from 'rxjs';
import { Character } from 'src/app/models/character.model';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  arrPj: Character[] = [];
  pjR: any[] = [];
  currentPage: number;
  numPage: number;
  status: string = '';
  id: number | null = null ;
  query: string;
  constructor(private pjService: CharacterServiceService,
    private router: Router, private actRouter: ActivatedRoute) {

      this.currentPage = 1;
      this.numPage = 0;
      this.query = '';
      //this.urlChanged();
     }

  async ngAfterViewInit() {
    // console.log(this.pjService.getCharacter().subscribe())
    // console.log(this.arrPj);
    // await this.getCharactersByQuery().then(response => {
    //   this.arrPj = response['results']
    //   //console.log(this.pjR);
    // })

  }
  async ngOnInit() {
    this.getDataService()
    // await this.pjService.getCharacterFilter().then(response => {
    //   console.log(response['results']);
    // })

    //console.log(this.actRouter.queryParamMap.pipe(map(results => ({params: results}))).subscribe(results => {console.log(results.value)}))

    // this.actRouter.queryParams.subscribe(q => {


    // });
    //this.getCharactersByQuery()
  }



private urlChanged(): void{
  this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)).subscribe(
      () => {
        this.arrPj=[];
        this.currentPage = 1;
        this.getCharactersByQuery()
      }
    )
}
private getCharactersByQuery(): void{
  this.actRouter.queryParams.subscribe((params: Params) =>{
    this.query = params['q']
    })
  }

private getDataService(): void{
    this.pjService.getCharacter(this.query).pipe(
      take(1)
    ).subscribe((res:any) =>{
    if(res?.results?.length){
      const{info, results} = res;
      this.arrPj = [...this.arrPj, ...results];
    }else{
      this.arrPj = []
    }})
  }


}


//   //console.log(this.pjService.getCharacter(this.query));
//   return this.pjService.getCharacter(this.query);
// }

// private async getCharacter(): Promise<any>{
//   return await this.pjService.getCharacter().then(response => {
//     this.arrPj = response['results']
//     this.numPage = response['info']['pages']
//    });
//   //console.log(this.arrPj);
// }



