import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/components/search/search.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-tours',
  imports: [SearchComponent, BannerComponent],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {

}
