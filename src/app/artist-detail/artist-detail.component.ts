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
  providers: [MuralmeService]
})
export class ArtistDetailComponent implements OnInit {
  artistId: string = null;
  artistToDisplay: Muralme;

  constructor(private muralmeService: MuralmeService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.artistId = urlParameters['id'];
  });

    this.muralmeService.getArtistById(this.artistId).subscribe(dataLastEmittedObserver => {
      this.artistToDisplay = new Muralme(
        dataLastEmittedObserver.name,
        dataLastEmittedObserver.bio,
        dataLastEmittedObserver.style,
        dataLastEmittedObserver.paint,
        dataLastEmittedObserver.price,
        dataLastEmittedObserver.imageurl)
    });
  }

}
