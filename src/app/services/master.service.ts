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
        images: ['/assets/images/main/seven_commando_beach.jpeg'],
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
        images: ['/assets/images/main/shimizu_island.jpeg'],
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
        images: ['/assets/images/main/hidden_beach.jpeg'],
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
        images: ['/assets/images/main/paradise_beach.jpeg'],
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
        images: ['/assets/images/main/shimizu_island.jpeg'],
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
        images: ['/assets/images/main/shimizu_island.jpeg'],
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
        images: ['/assets/images/bg/discoveries.jpeg'],
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
        images: ['/assets/images/bg/discoveries.jpeg'],
        // latitude: '',
        // longitude: '',
        mapLogo: '',
        sort: 1
    }
  ];

  private readonly _continents = signal<Masters[]>(this.initialMasters);
  public _search = signal<string>('');

  readonly continents = computed(() => this._continents());
  readonly search = computed(() => this._search());

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
