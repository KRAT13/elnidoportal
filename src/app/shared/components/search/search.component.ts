import { Component, computed, EventEmitter, inject, input, Input, model, output, Output } from '@angular/core';
import { MasterService } from '../../../services';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  messageEvent = output<string>();
  private selectedCategory: string = '';

  masterService = inject(MasterService)
  search = model<string>('');
  _search = computed(() => this.masterService.search)
}
