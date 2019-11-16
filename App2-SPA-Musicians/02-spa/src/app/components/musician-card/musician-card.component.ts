import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Musician } from 'src/app/services/musicians.service';

@Component({
  selector: 'app-musician-card',
  templateUrl: './musician-card.component.html',
  styleUrls: ['./musician-card.component.css']
})

export class MusicianCardComponent implements OnInit {

  @Input() musician:Musician;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  
  seeMusician(id: number) {
    this._router.navigate(['/musician', id]);
  }

}
