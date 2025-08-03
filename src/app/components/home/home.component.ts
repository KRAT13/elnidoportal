import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { TourletComponent } from './tourlet/tourlet.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, TourletComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
