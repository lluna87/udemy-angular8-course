import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusiciansService, Musician } from 'src/app/services/musicians.service';
import { _ } from 'underscore';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private searchResults:Musician[];
  private term:string;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _musiciansService:MusiciansService,
    private _router: Router
    ) {
    this._activatedRoute.params.subscribe(params => {
      this.term = params['term'];
    });
    
    this.searchResults = _.sortBy(_musiciansService.searchMusician(this.term), (musician) => musician.name);

  }

  ngOnInit() {
  }

  seeMusician(id:number) {
    this._router.navigate(['/musician', id]);
  }

}
