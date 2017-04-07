import { Component, OnInit } from '@angular/core';
import { Muralme } from '../muralme.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MuralmeService } from '../muralme.service';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
  providers: [MuralmeServices]
})
export class ArtistDetailComponent implements OnInit {
  artistId: string = null;
  artistToDisplay: Artist;

  constructor(private muralmeService: MuralmeServices, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.artistId = urlParameters['id'];
    });
    this.artistService.getArtistById(this.artistId).subscribe(dataLastEmittedObserver => {
      this.artistToDisplay = new Artist(
        dataLastEmittedObserver.name,
        dataLastEmittedObserver.bio,
        dataLastEmittedObserver.style,
        dataLastEmittedObserver.paint,
        dataLastEmittedObserver.price,
        dataLastEmittedObserver.imageurl)
    });
  }

}
