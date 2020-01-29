import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public isLoading:boolean = false;
  public artists:any[] = [];

  constructor( 
    private spotify: SpotifyService
    ) { }

  ngOnInit() {
  }

  public search(term:string) {
    /* Deberia deshabilitar la anmacion de carga  */
    this.isLoading = term != undefined && term != null;
    this.spotify.getArtist(term).subscribe((data:any) => {
        this.artists = data;
        this.isLoading = false;
      });
  }

}
