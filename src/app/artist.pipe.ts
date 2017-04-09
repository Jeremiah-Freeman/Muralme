import { Pipe, PipeTransform } from '@angular/core';
import { Muralme } from './muralme.model';


@Pipe({
  name: 'artist'
})

export class ArtistPipe implements PipeTransform {



  transform(input: Muralme[], desiredArtist) {

    var output: Muralme[] = [];

  if(desiredArtist === "lowCost") {

    for (var i = 0; i < input.length; i++) {

     if (input[i].price < 10000) {

       output.push(input[i]);

     }

   }

   return output;

  } else if (desiredArtist === "highCost") {

    for (var i = 0; i < input.length; i++) {

      if (input[i]. price > 10001) {

       output.push(input[i]);

      }

    }

     return output;

    } else {

     return input;

    }

  }

}
