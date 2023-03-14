import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CharacterServiceService } from 'src/app/services/character-service.service';

@Component({
  selector: 'app-formsearch',
  templateUrl: './formsearch.component.html',
  styleUrls: ['./formsearch.component.css']
})
export class FormsearchComponent implements OnInit {

  constructor(private router: Router, private service: CharacterServiceService) { }

  ngOnInit(): void {


  }

  onSearch(value: string) {
    //console.log(value);

    let navigationExtr: NavigationExtras = {
      queryParams:{q : value}
    }
    if(value && value.length > 0){
      this.router.navigate(['/home'], navigationExtr)

    }else{
      this.router.navigate(['/home'])
    }
  }
}
