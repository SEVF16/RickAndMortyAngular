import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Filter } from 'src/app/models/filter.interface';
import { CharacterServiceService } from 'src/app/services/character-service.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  filters: Filter = {};
  constructor(private pjService: CharacterServiceService) { }

  ngOnInit(): void {

    this.pjService.getFilters().pipe(
      map((response: any) => {

        const statusValues = ['All', ...new Set(response.results.map((character: any) => character.status))];
        const speciesValues = ['All', ...new Set(response.results.map((character: any) => character.species))];
        const genderValues = ['All', ...new Set(response.results.map((character: any) => character.gender))];


        this.filters.status = statusValues;
        this.filters.species = speciesValues;
        this.filters.gender = genderValues;
      })
    ).subscribe();
  }

}
