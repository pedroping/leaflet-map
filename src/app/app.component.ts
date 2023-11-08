import { Component } from '@angular/core';
import { Map, Control, DomUtil, ZoomAnimEvent, Layer, MapOptions, tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-leaflet';

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 50, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };
  public map!: Map;
  public zoom!: number;
}
