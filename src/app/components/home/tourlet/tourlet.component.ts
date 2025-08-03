import { Component, inject } from '@angular/core';
import { ToursService } from '../../../services/tours.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-tourlet',
  imports: [],
  templateUrl: './tourlet.component.html',
  styleUrl: './tourlet.component.css'
})
export class TourletComponent {
  
  tourService = inject(ToursService);
  tours = '';

  ngOnInit() {
    AOS.init({ once: true });
    AOS.refresh();
  }
}
