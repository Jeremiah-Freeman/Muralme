import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MuralmeService } from '../muralme.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MuralmeService]
})
export class HomeComponent implements OnInit {
  artists: FirebaseListObservable<any[]>;

  constructor(private muralmeService: MuralmeService, private router: Router) { }

  ngOnInit() {
    this.artists = this.muralmeService.getArtists();
  }

  goToDetailPage(clickedArtist) {
   this.router.navigate(['artist-detail', clickedArtist.$key]);
 };

}
