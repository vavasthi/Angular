import { Injectable, inject } from '@angular/core';
import { Database, getDatabase, ref, onValue, list, listVal } from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private database : Database = inject(Database)
  constructor() { 

  }

  getUrls() {
    return listVal(ref(this.database, "/maps"));
  }
}
