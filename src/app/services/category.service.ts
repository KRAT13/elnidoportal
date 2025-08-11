import { Injectable, signal, computed } from '@angular/core';
import { Categories } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    
  private readonly initialCategories: Categories[] = [
    {
        code: 'TSP',
        title: 'Tourist Spots',
        description: 'Discover El Nido’s most popular beaches and breathtaking islands!'
    },
    {
        code: 'TXA',
        title: 'Tour A',
        description: 'Tour A'
    },
    {
        code: 'TXB',
        title: 'Tour B',
        description: 'Tour B'
    },
    {
        code: 'TXC',
        title: 'Tour C',
        description: 'Tour C'
    },
    {
        code: 'TXD',
        title: 'Tour D',
        description: 'Tour D'
    },    
    {
        code: 'TXX',
        title: 'All Tours Islands',
        description: 'Conbine Tour A, B, C, D'
    },    
    {
        code: 'TXO',
        title: 'Other Islands',
        description: 'Other Islands ',
    }, 
    {
        code: 'ISL',
        title: 'Islands',
        description: 'Islands'
    },
    {
        code: 'T05',
        title: 'TOP 5 Islands',
        description: 'TOP 5 Islands'
    },
    {
        code: 'RES',
        title: 'Resorts',
        description: 'Private Islands',
    },
  ];

  private readonly _continents = signal<Categories[]>(this.initialCategories);

  readonly continents = computed(() => this._continents());

  readonly sortedContinents = computed(() =>
    [...this._continents()].sort((a, b) => a.title.localeCompare(b.title))
  );

  getContinentByCode(code: string): Categories | undefined {
    return this._continents().find(c => c.code === code);
  }

  addContinent(categories: Categories): void {
    this._continents.update(curr => [...curr, categories]);
  }
}
