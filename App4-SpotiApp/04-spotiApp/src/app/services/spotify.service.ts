import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Alternative to make a service available, 
// without the use of app.module.ts
// @Injectable({ providedIn: 'root' })
@Injectable()
export class SpotifyService {

  constructor(
    private http:HttpClient
  ) { 
    console.log("Spotify Service is available");
  }

  private parameters:any = {
    country: "AR",
    recordLimit: 20,
    offset: 5
  }

  private urls:any = {
    // newReleases: 'https://api.spotify.com/v1/browse/new-releases?country=AR&limit=50&offset=5'
    newReleases: 'https://api.spotify.com/v1/browse/new-releases?' + 
    'country=' + this.parameters.country + 
    '&limit=' + this.parameters.recordLimit + 
    '&offset=' + this.parameters.offset
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB5RhAlrSvOHQvy2fgtaZmD_iIyYbNqh5tmt9LiM1dWATSAIh1FBKubc1lAXkUr8C8WfjVYfvOqmVXuQA4mr11Qr3k3Uvm8I3hYkrEnWV4TijAlqvfJ_9bZz5zHrTjcAXmKtJJ4Z9dGk0BHzBs'
    });

    this.http.get(
      this.urls.newReleases, { headers }
      ).subscribe(o => {
      console.log(o);
    });
  }

  /** Usable URLs
   * https://developer.spotify.com/dashboard/applications/b95884722cee472395c01ced377d0a8e
   * https://developer.spotify.com/console/browse/
   * -- To generate Tokens
   * https://developer.spotify.com/console/get-new-releases/?country=AR&limit=50&offset=5
   */

}
