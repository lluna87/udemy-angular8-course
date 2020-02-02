import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Alternative to make a service available, 
// without the use of app.module.ts
// @Injectable({ providedIn: 'root' })
@Injectable()
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { 
  }

  /** Usable URLs
   * https://developer.spotify.com/dashboard/applications/b95884722cee472395c01ced377d0a8e
   * https://developer.spotify.com/console/browse/
   * -- To generate Tokens
   * https://developer.spotify.com/console/get-new-releases/?country=AR&limit=50&offset=5
   */

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.parameters.token
    });
    return this.http.get(url, { headers })
  }

  private parameters:any = {
    country: "AR",
    recordLimit: 20,
    offset: 5,
    token: "GET_A_TOKEN_FROM : https://developer.spotify.com/console/"
  }

  getNewReleases() {
    let url = 'browse/new-releases?' + 
    'country=' + this.parameters.country + 
    '&limit=' + this.parameters.recordLimit + 
    '&offset=' + this.parameters.offset;

    return this.getQuery(url).
      pipe(map(data => data['albums'].items));
  }


    public getArtists(term:string) {
      let url:string = `search?q=${term}&type=artist&market=AR&limit=5`;

      return this.getQuery(url).
        pipe(map(data => data['artists'].items));
    }

    public getArtist(id:string) {
      return this.getQuery(`artists/${ id }`);
    }

    public getArtistTopTracks(id:string) {
      return this.getQuery(`artists/${ id }/top-tracks?country=${ this.parameters.country }`).
        pipe(map(data => data['tracks']));
    }
}
