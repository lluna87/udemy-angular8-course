import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Musician } from 'src/app/services/musicians.service';

@Component({
  selector: 'app-musician-card',
  templateUrl: './musician-card.component.html',
  styleUrls: ['./musician-card.component.css']
})

export class MusicianCardComponent implements OnInit {

  @Input() musician:Musician;
  @Input() id:number;

  @Output() pickedMusician: EventEmitter<number>; 

  constructor(private _router: Router) { 
    this.pickedMusician = new EventEmitter();
  }

  ngOnInit() {
  }

  
  seeMusician() {
    // this._router.navigate(['/musician', this.id]);
    this.pickedMusician.emit(this.id);
  }

}
