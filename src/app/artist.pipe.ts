import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artist'
})
export class ArtistPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
