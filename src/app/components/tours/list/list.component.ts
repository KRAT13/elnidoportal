import { Component, computed, effect, inject, signal } from '@angular/core';
import { MasterService } from '../../../services';
import { SearchPipe } from '../../../shared/pipes/search.pipe';
import { Masters } from '../../../models';
import { CategoryService } from '../../../services/category.service';
import { Categories } from '../../../models/category.model';
import { FallbackImageDirective } from '../../../shared/directives/fallback-image.directive';

@Component({
  selector: 'app-list',
  imports: [SearchPipe, FallbackImageDirective],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    discoveriesService = inject(MasterService);
    categoryService = inject(CategoryService);
    searchTerm = this.discoveriesService.search;

    items: Masters[] = [];
    categories = computed<string[]>(() => {
      return [...new Set(
        this.items.flatMap(row => row.category.split(',').map(s => s.trim()))
      )];
    });

    constructor() {
      effect(() => {
        const lowerTerm = this.searchTerm();
        this.items = this.discoveriesService.continents().filter(item =>
          Object.values(item).some(value =>
            String(value).toLowerCase().includes(lowerTerm)
          )
        );

        console.log('MAS========', this.items);
        console.log('CAT========', this.categories());
      });
    }

    getCategory(code: string): string {
      const found = this.categoryService.continents().find(item => item.code === code);
      return found?.title || '';
    }
}
