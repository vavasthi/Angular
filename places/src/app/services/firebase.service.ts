import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db:AngularFireDatabase) { }

  getUrls() {
    return this.db.list("/maps").valueChanges();
  }
}
