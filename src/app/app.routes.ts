import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToursComponent } from './components/tours/tours.component';
import { IslandsComponent } from './components/islands/islands.component';
import { MapComponent } from './components/map/map.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'islands', component: IslandsComponent },
  { path: 'map', component: MapComponent }
];
