import { Injectable, signal, computed } from '@angular/core';
import { Tours } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
    
  private readonly initialTours: Tours[] = [
    {
        code: 'A',
        name: 'Tour A',
        imgLink: '/assets/images/tours/tour_a.jpeg'
    },
    { 
        code: 'B',
        name: 'Tour B',
        imgLink: '/assets/images/tours/tour_b.jpeg'
    },
    { 
        code: 'C',
        name: 'Tour C',
        imgLink: '/assets/images/tours/tour_c.jpeg'
    },
    { 
        code: 'D',
        name: 'Tour D',
        imgLink: '/assets/images/tours/tour_d.jpeg'
    }
  ];

  private readonly _continents = signal<Tours[]>(this.initialTours);

  readonly continents = computed(() => this._continents());

  readonly sortedContinents = computed(() =>
    [...this._continents()].sort((a, b) => a.name.localeCompare(b.name))
  );

  getContinentByCode(code: string): Tours | undefined {
    return this._continents().find(c => c.code === code.toUpperCase());
  }

  addContinent(island: Tours): void {
    this._continents.update(curr => [...curr, island]);
  }
}
