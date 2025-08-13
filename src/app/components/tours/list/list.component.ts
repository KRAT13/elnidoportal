import { Component, inject } from '@angular/core';
import { MasterService } from '../../../services';
import { SearchPipe } from '../../../shared/pipes/search.pipe';

@Component({
  selector: 'app-list',
  imports: [SearchPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    discoveriesService = inject(MasterService);
    searchTerm = this.discoveriesService.search;
}
