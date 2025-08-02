import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { TourletComponent } from './tourlet/tourlet.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, TourletComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
