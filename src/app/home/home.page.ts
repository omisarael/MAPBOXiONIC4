import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mapa: Mapboxgl.Map;
  constructor() {

  }

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.6462162, 19.3238707], // starting position
      zoom: 16.6 // starting zoom
    });

    this.createMarker(-99.6462162, 19.3238707);

  }

  createMarker(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

    marker.on('dragend', () => {
      console.log(marker.getLngLat());
    });
  }
}