import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  public artist:any;
  // public topTracks:any[];
  public topTracks:any[];
  public isLoading:boolean = true;

  constructor(private route: ActivatedRoute, private spotify:SpotifyService) { 
    this.route.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  private getArtist(id:string) {
    this.spotify.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.isLoading = false;
    });
  }

  private getTopTracks(id:string) {
    this.spotify.getArtistTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
    })
  }
}
