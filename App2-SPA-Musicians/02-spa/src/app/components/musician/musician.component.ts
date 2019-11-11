import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusiciansService } from 'src/app/services/musicians.service';

@Component({
  selector: 'app-musician',
  templateUrl: './musician.component.html',
  styleUrls: ['./musician.component.css']
})
export class MusicianComponent implements OnInit {

  private musicianId:number;
  private musician:any;

  constructor(private _activatedRoute:ActivatedRoute,
              private _musiciansService:MusiciansService) {
    this._activatedRoute.params.subscribe(params => {
      this.musicianId = parseInt(params['id']);
    });
    this.musician = _musiciansService.getMusician(this.musicianId);
  }

  ngOnInit() {
  }

}
