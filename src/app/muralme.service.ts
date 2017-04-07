import { Injectable } from '@angular/core';
import { Muralme } from './muralme.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class MuralmeService {
  muralmes: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.muralmes = angularFire.database.list('muralmes');

  }
