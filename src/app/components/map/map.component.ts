import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LocationService } from '../../services';
@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit, AfterViewInit  {
  private map!: L.Map;
  private myLocationMarker!: L.Marker;
  
  lat?: number;
  lng?: number;

  locationService = inject( LocationService)

  ngAfterViewInit(): void {
    const customIcon = L.icon({
      iconUrl: '/assets/images/map/pin.svg',
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
    });

    this.map = L.map('map', { zoomControl: false })
      .setView([11.179903, 119.390459], 20);

    L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(this.map);

    // Static location marker
    L.marker([11.179903, 119.390459], { icon: customIcon })
      .addTo(this.map)
      .bindTooltip('El Nido Municipality', { permanent: false, direction: 'auto', className: 'customMapTooltip'});

    // Zoom control bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(this.map);
  }


  findMe() {
    this.locationService.getCurrentLocation()
      .then(pos => {
        this.lat = pos.coords.latitude;
        this.lng = pos.coords.longitude;

        const locationIcon = L.icon({
          iconUrl: '/assets/images/marker-icon.png', // <-- use your own icon
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        });

        this.myLocationMarker = L.marker([this.lat, this.lng], { icon: locationIcon })
          .addTo(this.map)
          .bindTooltip('El Nido Municipality', { permanent: false, direction: 'auto' })
          .on('click', () => {
            this.onMarkerClick();
          });

        // Center map on current location
        this.map.setView([this.lat, this.lng], 18);
      })
      .catch(err => {
        console.error(err);
        alert('Unable to retrieve location: ' + err);
      });
  }
  
  onMarkerClick() {
    console.log('Marker Clicked!');
  }

  ngOnInit(): void {
      this.findMe();
  }
}
