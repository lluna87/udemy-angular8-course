import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackImage'
})
export class TrackImagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (images === undefined || images === null || images.length == 0)
      return 'assets/img/noimage.png'

    if (images.length == 1) return images[0].url;

    let sortedImages = images.sort((a, b) => a.height - b.height);

    return sortedImages[0].url;
  }

}
