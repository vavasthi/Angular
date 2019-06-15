import { Component, ViewChild } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public firebaseService: FirebaseService) {}

  title: string = 'My Drives';
  lat: number = 21.15;
  lng: number = 79.0;
  zoomLevel:number = 8;
  kmls : any;

  ngOnInit() {
    this.firebaseService.getUrls().subscribe(result => {
      this.kmls = result
      this.zoomLevel = 5;
    })
  }
}
