import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocationService {
  getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocation is not supported by this browser.');
      } else {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000, // 10 seconds
          maximumAge: 0
        });
      }
    });
  }
}
