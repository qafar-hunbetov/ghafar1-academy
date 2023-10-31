import { Component } from '@angular/core';
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 40.446808, lng:49.989046 };
  zoom = 13
  marker: MarkerProperties = 
    { position: { lat: 40.446808, lng: 49.989046 }}// Eiffel Tower
  ;
}



