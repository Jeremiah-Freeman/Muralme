import { Injectable } from '@angular/core';
import { Muralme } from './muralme.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class MuralmeService {
  artists: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.artists = angularFire.database.list('artists');

    getArtists(){
    return this.artists;
    }

    getArtistById(artistKey: string) {
      return this.angularFire.database.object('/artists/' + artistKey);
    }

    saveArtist(newArtist: Artist) {
      this.artists.push(newArtist);
    }

    deleteArtist(localArtistToDelete){
      var artistEntryInFirebase = this.getArtistById(localArtistToDelete.$key);
      artistEntryInFirebase.remove();
    }

    updateArtist(thisArtist: any) {
      var artistEntryInFirebase = this.getArtistById(thisArtist.$key);
      artistEntryInFirebase.update({name: thisArtist.name,
                                  bio: thisArtist.bio,
                                  style: thisArtist.style,
                                  price: thisArtist.price,
                                  imageurl: thisArtist.imageurl,
                                  paint: thisArtist.paint});

    }
  }
}
