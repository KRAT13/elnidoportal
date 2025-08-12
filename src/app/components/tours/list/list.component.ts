import { Component, inject } from '@angular/core';
import { MasterService } from '../../../services';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    discoveriesService = inject(MasterService);
}
