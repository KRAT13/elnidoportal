import { Component, inject } from '@angular/core';
import { SearchComponent } from '../../shared/components/search/search.component';
import { BannerComponent } from './banner/banner.component';
import { ListComponent } from './list/list.component';
import { MasterService } from '../../services';

@Component({
  selector: 'app-tours',
  imports: [BannerComponent, ListComponent],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent {
  masterService = inject(MasterService)
}
