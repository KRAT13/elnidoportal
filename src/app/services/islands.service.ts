import { Injectable, signal, computed } from '@angular/core';
import { Islands } from '../models';

@Injectable({
  providedIn: 'root'
})
export class IslandsService {
    
  private readonly initialIslands: Islands[] = [
    {
        code: 'A-BL',
        name: 'Big Lagoon',
        activities: 'Kayak or swim',
        description: 'Paddle through a wide shallow channel into an emerald-hued lagoon framed by soaring limestone cliffs. Kayak rental is available for extra exploration.',
        tour: {
            code: 'A',
            name: 'Tour A'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    },
    { 
        code: 'A-SL',
        name: 'Secret Lagoon',
        activities: 'Kayak or swim',
        description: 'Swim through a small cave opening into a hidden pool enclosed by cliff walls—truly magical.',
        tour: {
            code: 'A',
            name: 'Tour A'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    },
    { 
        code: 'A-SI',
        name: 'Shimizu Island',
        activities: 'Snorkeling or beachside lunch',
        description: 'Time for snorkeling around colorful reefs or relaxing during the included beachside lunch stop.',
        tour: {
            code: 'A',
            name: 'Tour A'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    },
    { 
        code: 'A-SCB',
        name: 'Seven Commandos Beach',
        activities: 'Beach time, light drinks, snorkeling',
        description: 'A white‑sand beach lined with palm trees and occasional sea turtles near the shore. Grab snacks or a drink at tranquil beach bars.',
        tour: {
            code: 'A',
            name: 'Tour A'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    },
    { 
        code: 'A-MI',
        name: 'Miniloc Island',
        activities: 'Boat ride, photo opportunity',
        description: 'Circle or dock for photos to admire its dramatic limestone coastline; this area also hosts the lagoons.',
        tour: {
            code: 'A',
            name: 'Tour A'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    },
    { 
        code: 'B-SI',
        name: 'Snake Island ',
        activities: '',
        description: 'Famous for its long curved sandbar that appears at low tide, offering panoramic sea views and photo ops.',
        tour: {
            code: 'B',
            name: 'Tour B'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    },
    { 
        code: 'B-PI',
        name: 'Pinagbuyutan Island',
        activities: '',
        description: 'Also known as Ellis Island. Pristine white sand fringed by dramatic limestone cliffs, ideal for a swim or snorkeling.',
        tour: {
            code: 'B',
            name: 'Tour B'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    },
    { 
        code: 'B-EBPB',
        name: 'Entalula Beach or Papaya Beach',
        activities: '',
        description: 'Relax on a quiet stretch of sand; some providers substitute Papaya Beach for variety.',
        tour: {
            code: 'B',
            name: 'Tour B'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    },
    { 
        code: 'B-CAC',
        name: 'Cathedral Cave',
        activities: '',
        description: 'A majestic sea cave with high ceilings. Most boats anchor outside and you snap photos from the boat.',
        tour: {
            code: 'B',
            name: 'Tour B'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    },
    { 
        code: 'B-CUC',
        name: 'Cudugnon Cave',
        activities: '',
        description: 'Historical and archaeological—used during WWII, with pottery findings from the Sung Dynasty. You can walk through low entry tunnels into a lit interior.',
        tour: {
            code: 'B',
            name: 'Tour B'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    },
    { 
        code: 'B-',
        name: '',
        activities: '',
        description: '',
        tour: {
            code: 'B',
            name: 'Tour B'
        },
        location: {
            latitude: '',
            longitude: ''
        }
    }


  ];

  private readonly _continents = signal<Islands[]>(this.initialIslands);

  readonly continents = computed(() => this._continents());

  readonly sortedContinents = computed(() =>
    [...this._continents()].sort((a, b) => a.name.localeCompare(b.name))
  );

  getContinentByCode(code: string): Islands | undefined {
    return this._continents().find(c => c.code === code.toUpperCase());
  }

  addContinent(island: Islands): void {
    this._continents.update(curr => [...curr, island]);
  }
}
