import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artists:any[] = [];

  constructor( 
    private spotify: SpotifyService
    ) { }

  ngOnInit() {
  }

  public search(term:string) {
    console.log(term);
    this.spotify.getArtist(term).
      subscribe((data:any) => {
        this.artists = data;
      });
  }

}
