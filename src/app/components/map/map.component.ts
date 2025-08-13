import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
// import * as L from 'leaflet';
import { icon, latLng, Map, marker, Marker, tileLayer, LatLngBounds, LatLngExpression } from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { LocationService } from '../../services';
@Component({
  selector: 'app-map',
  imports: [LeafletModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit, AfterViewInit  {
  // private map!: L.Map;
  // private myLocationMarker!: L.Marker;
  // markers: L.Marker[] = [];
  // lat?: number;
  // lng?: number;

  bounds: LatLngBounds[] = [];

  map!: Map;
  markers: Marker[] = [];
  options = {
    layers: [
      tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: 'Google Maps'
      })
    ],
    zoom: 12,
    center: latLng(11.179903, 119.390459)
  };

  locationService = inject( LocationService)
  customIcon = icon({
      iconUrl: '/assets/images/map/pin.svg',
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
    });
  ngAfterViewInit(): void {


    // this.map = L.map('map', { zoomControl: false })
    //   .setView([11.179903, 119.390459], 20);

    // L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    //   maxZoom: 20,
    //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    // }).addTo(this.map);

    // // Static location marker
    // L.marker([11.179903, 119.390459], { icon: customIcon })
    //   .addTo(this.map)
    //   .bindTooltip('El Nido Municipality', { permanent: false, direction: 'auto', className: 'customMapTooltip'});

    // // Zoom control bottom right
    // L.control.zoom({ position: 'bottomright' }).addTo(this.map);
  }

  onMapReady(map: Map) {
    this.map = map;
    
    // Add some markers
    // const londonMarker = marker([11.179903, 119.390459]).addTo(this.map);
    
    // // Store markers for reference
    // this.markers = [londonMarker];
    
    // // Add click handlers to each marker
    // this.markers.forEach(m => {
    //   m.on('click', (e) => {
    //     this.centerAndZoom(e.target);
    //   });

    //   m.setIcon(this.customIcon);
    // });

    this.addMarker(11.179903, 119.390459, 'El Nido Municipality')
  }

  addMarker(lat: number, lng: number, title: string) {
    const newMarker = marker([lat, lng], {icon: this.customIcon}).addTo(this.map).bindTooltip(title);
    
    newMarker.on('click', (e) => {
      this.centerAndZoom(e.target);
    });

    this.markers.push(newMarker);
  }

  centerAndZoom(marker: L.Marker) {
    if (this.map) {
      // this.map.setView(marker.getLatLng(), 20);
      this.map.flyTo(marker.getLatLng(), 17);
    }
  }

  findMe() {
    this.locationService.getCurrentLocation()
      .then(pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        this.addMarker(lat, lng, 'My Location');
        this.bound();
      })
      .catch(err => {
        console.error(err);
        alert('Unable to retrieve location: ' + err);
      });
  }

  bound() {
    const markerCoords: LatLngExpression[] = [];
    const bounds = new LatLngBounds(markerCoords[0], markerCoords[0]);

    this.markers.forEach(coords => {
      bounds.extend(coords.getLatLng())
    })

    this.map.fitBounds(bounds, {
      paddingTopLeft: [30, 10],
      paddingBottomRight: [10, 10]
    });
  }
  
  onMarkerClick(e: any) {
    this.centerAndZoom(e)
  }

  ngOnInit(): void {
      this.findMe();
  }
}
