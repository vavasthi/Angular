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
  }

  title: string = 'My Drives';
  center: google.maps.LatLngLiteral = {lat: 21.15, lng:  79.0}
  kmls : any;
  map: google.maps.Map;
  




  ngOnInit() {
    this.firebaseService.getUrls().subscribe(result => {
      this.kmls = result
      var zoom = 6;
      var loader = new Loader({
        apiKey: "AIzaSyCxUM3TIxN3e3VBtn8L4z3Uq-2o254Nbng",
        version: "weekly",
      });
      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        this.map = new Map(document.getElementById("map") as HTMLElement, {
          center: { lat: 21.15, lng: 79.0 },
          zoom: zoom,
        });
        for (var kml of this.kmls) {
          var layer = new google.maps.KmlLayer({url:kml});
          layer.setMap(this.map)
          }
      });
    });
  }
}
