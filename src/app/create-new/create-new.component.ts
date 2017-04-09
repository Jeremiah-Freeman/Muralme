import { Component, OnInit } from '@angular/core';
import { Muralme } from '../muralme.model';
import { MuralmeService } from '../muralme.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css'],
  providers: [MuralmeService]
})
export class CreateNewComponent implements OnInit {

  addArtist(name: string, bio: string, style: string, paint: string, price: number, imageurl: string) {
      var newMuralme: Muralme = new Muralme(name, bio, style, paint, price, imageurl);
      console.log(newMuralme);
      this.muralmeService.saveArtist(newMuralme);
    }
    constructor(private muralmeService: MuralmeService) { }

    ngOnInit() {
    }
  }
