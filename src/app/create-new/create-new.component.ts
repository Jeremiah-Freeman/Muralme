import { Component, OnInit } from '@angular/core';
import { Muralme } from '../muralme.model';
import { MuralmeService } from '../muralme.service';


@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  addArtist(name: string, bio: string, style: string, paint: string, price: number, imageurl: string) {
    if (!name || !bio || !style || !paint || !price || !imageurl) {
      alert("Oops, please fill out all the fields");
    } else {
      var newArtist: Artist = new Artist(name, bio, style, paint, price, imageurl);
      console.log(newArtist);
      this.muralmeService.saveArtist(newArtist);
    }
  }



  constructor(private muralmeService: MuralmeService) { }

  ngOnInit() {
  }

}
