import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() public items:any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public viewArtist(item:any) {
    let artistID = 0;

    switch(item.type){
      case 'album': 
        artistID = item.artists[0].id
        break;
      default: 
        artistID = item.id;
    }

    this.router.navigate(['/artist', artistID]);
  }


}
