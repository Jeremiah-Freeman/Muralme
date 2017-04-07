import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MuralmeService } from '../muralme.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MuralmeService]
})
export class AdminComponent implements OnInit {
  artists: FirebaseListObservable<any[]>;


  ngOnInit() {
    this.artists = this.muralmeService.getArtists();
  }

  beginDeletingProject(artistToDelete) {
    if(confirm("Are you sure you want to delete this item from your collection?")){
      this.muralmeService.deleteArtist(artistToDelete);
    }
  }

    constructor(private muralmeService: MuralmeService, private router: Router) { }

}
