import { Injectable, signal, computed } from '@angular/core';
import { Islands, Masters } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
    
  private readonly initialMasters: Masters[] = [
    {
        id: 1,
        category: 'TXX,TXA',
        title: 'Seven Commandos',
        description: 'Popular white-sand beach with amenities',
        images: [],
        // latitude: '',
        // longitude: '',
        mapLogo: '',
        sort: 1
    },
    {
        id: 2,
        category: 'TXX,TXA',
        title: 'Shimizu Island',
        description: 'Limestone-walled islet, good for snorkeling',
        images: [],
        // latitude: '',
        // longitude: '',
        mapLogo: '',
        sort: 1
    },
    {
        id: 3,
        category: 'TXX,TXC',
        title: 'Hidden Beach',
        description: 'Secluded behind cliffs, accessible by tunnel',
        images: [],
        // latitude: '',
        // longitude: '',
        mapLogo: '',
        sort: 1
    },
    {
        id: 4,
        category: 'TXX,TXD',
        title: 'Paradise Beach',
        description: 'Idyllic white-sand, calm snorkeling',
        images: [],
        // latitude: '',
        // longitude: '',
        mapLogo: '',
        sort: 1
    },
    {
        id: 4,
        category: 'TXX,TXD',
        title: 'Paradise Beach',
        description: 'Idyllic white-sand, calm snorkeling',
        images: [],
        // latitude: '',
        // longitude: '',
        mapLogo: '',
        sort: 1
    }
  ];

  private readonly _continents = signal<Masters[]>(this.initialMasters);

  readonly continents = computed(() => this._continents());

  readonly sortedContinents = computed(() =>
    [...this._continents()].sort((a, b) => a.title.localeCompare(b.title))
  );

  getContinentByCode(id: number): Masters | undefined {
    return this._continents().find(c => c.id === id);
  }

  addContinent(masters: Masters): void {
    this._continents.update(curr => [...curr, masters]);
  }
}
