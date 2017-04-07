import { Component, Input, OnInit } from '@angular/core';
import { MuralmeService } from '../muralme.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MuralmeService]

})
export class EditComponent implements OnInit {
  @Input() selectedArtist;
  editFormShown: boolean = false;
    constructor(private muralmeService: MuralmeService) { }

    ngOnInit() {
    }

    updateArtist(artistToUpdate){
      this.muralmeService.updateArtist(artistToUpdate);
      this.editFormShown = false;
    }

    showEditForm() {
      this.editFormShown = true;
    }

    cancelEdit() {
      this.editFormShown = false;
    }

  }
