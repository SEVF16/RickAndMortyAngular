import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Info } from 'src/app/models/info.models';
import { CharacterServiceService } from 'src/app/services/character-service.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pageNumber: Info[] = [];
  currentPage: any;
  constructor(private pjService: CharacterServiceService, private router: Router) {
    this.currentPage = 1;
  }

  ngOnInit(): void {
    //this.getDataService()
  }


  // private getDataService(pPage?: number): void{
  //   //console.log(this.currentPage);
  //     this.pjService.getCharacter().pipe(
  //       take(1)
  //     ).subscribe((res:any) =>{
  //     if(res?.results?.length){
  //       const{info} = res;
  //       this.pageNumber = [info.pages]
  //     }})
  //   }

  // changePage(siguiente: boolean ){
  //   if (siguiente) {
  //     this.router.navigate(['/characters'], {queryParams:{page : this.currentPage++}})
  //   }else{
  //     this.router.navigate(['/characters'], {queryParams:{page : this.currentPage--}})
  //   }
  // }
}
