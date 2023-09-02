import { Component, ViewChild } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Loader } from "@googlemaps/js-api-loader"
import { Observable, of } from 'rxjs';
import { MapKmlLayer } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiLoaded: Observable<boolean>;

  constructor(public firebaseService: FirebaseService) {
    this.loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      this.map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 21.15, lng: 79.0 },
        zoom: this.zoom,
      });
    });
  
  }

  title: string = 'My Drives';
  center: google.maps.LatLngLiteral = {lat: 21.15, lng:  79.0}
  zoom:number = 7;
  kmls : any;
  map: google.maps.Map;
  loader = new Loader({
    apiKey: "AIzaSyA4GGCTcxjVf_VREUwjEzjhCRoakixiiEw",
    version: "weekly",
  });
  




  ngOnInit() {
    this.firebaseService.getUrls().subscribe(result => {
      this.kmls = result
      this.zoom = 5;
      for (var kml of this.kmls) {
        new google.maps.KmlLayer({map:this.map, url:kml});
        }
        })
  }
}
