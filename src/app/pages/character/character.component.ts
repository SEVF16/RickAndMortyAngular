import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, NavigationEnd, ParamMap, Params, Router } from '@angular/router';
import { CharacterServiceService } from 'src/app/services/character-service.service';
import { filter } from 'rxjs/operators';
import { Character } from 'src/app/models/character.interface';
import { Filter } from 'src/app/models/filter.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {
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
  id: number | null = null;
  query: string;
  pages: [] = [];
  pageNumber: any;
  private routerSubscription: Subscription | undefined;
  private queryParamsSubscription: Subscription | undefined;

  constructor(
    private pjService: CharacterServiceService,
    private router: Router,
    private actRouter: ActivatedRoute
  ) {
    this.query = '';
    this.urlChanged();
  }

  ngOnInit() {
    this.getDataCharacters();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  private urlChanged(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.arrPj = [];
        this.currentPage = 1;
        this.getCharactersByQuery();
      });
  }

  private getCharactersByQuery(): void {
    this.queryParamsSubscription = this.actRouter.queryParams.subscribe((params: Params) => {
      this.filterapi.name = params['q'];
      this.currentPage = this.currentPage;
      this.getDataCharacters();
    });
  }

  private getDataCharacters(pPage?: number): void {
    const pageToFetch = pPage || this.currentPage;

    this.pjService.getDataService(this.filterapi, pageToFetch).subscribe((response: any) => {
      this.arrPj = response.results;
      this.pageNumber = response.info.pages;

      if (this.pageNumber < this.currentPage) {
        this.currentPage = 1;
        this.fetchData();
      }
    });
  }

  private fetchData(): void {
    this.pjService.getDataService(this.filterapi, this.currentPage).subscribe((response: any) => {
      this.arrPj = response.results;
    });
  }

  changePage(siguiente: boolean) {
    if (siguiente) {
      this.currentPage++;
      this.getDataCharacters();
    } else {
      this.currentPage--;
      this.getDataCharacters();
    }
  }

  viewDetail(pId: number): void {
    this.router.navigate(['/detailCharacter/', pId]);
  }

  onStatus($event?: any) {
    let filter = $event.target.name;
    this.status = $event.target.value;
    if (filter === 'gender') {
      this.filterapi.gender = $event.target.value;
    }
    if (filter === 'Status') {
      this.filterapi.status = $event.target.value;
    }
    if (filter === 'species') {
      this.filterapi.species = $event.target.value;
    }
    this.getDataCharacters();
  }
}







