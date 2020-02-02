import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'trackPreview'
})
export class TrackPreviewPipe implements PipeTransform {

  constructor(
    private domSanitizer:DomSanitizer
    ) {

    }

  private url:string = 'https://open.spotify.com/embed/track/';

  transform(value:string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.url + value);
  }

}
