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
      var artistEntryInFirebase = this.getArtistById(this.Artist.$key);
      artistEntryInFirebase.update({name: this.Artist.name,
                                  bio: this.Artist.bio,
                                  style: this.Artist.style,
                                  price: this.Artist.price,
                                  imageurl: this.Artist.imageurl,
                                  paint: this.Artist.paint});

    }
  }
}
