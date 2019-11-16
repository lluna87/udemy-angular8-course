import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Musician } from 'src/app/services/musicians.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() public musician:Musician;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  seeMusician(id:number) {
    this._router.navigate(['/musician', id]);
  }

}
