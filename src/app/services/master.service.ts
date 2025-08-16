import { Injectable, signal, computed } from '@angular/core';
import { Islands, Masters } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
    
  private readonly initialMasters: Masters[] = [
    {
        'id':1,
        'category':'TXX,TXA',
        'title':'Seven Commandos Beach',
        'description':'Popular white-sand beach with amenities',
        'images':['/assets/images/main/seven_commandos_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':1,
        'latitude':11.173628,
        'longitude':119.379124
    },
    {
        'id':2,
        'category':'TXX,TXA',
        'title':'Shimizu Island',
        'description':'Limestone-walled islet, good for snorkeling',
        'images':['/assets/images/main/shimizu_island.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':2,
        'latitude':11.138802,
        'longitude':119.318866
    },
    {
        'id':3,
        'category':'TXX,TXC',
        'title':'Hidden Beach',
        'description':'Secluded behind cliffs, accessible by tunnel',
        'images':['/assets/images/main/hidden_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':3,
        'latitude':11.189853,
        'longitude':119.282311
    },
    {
        'id':4,
        'category':'TXX,TXD',
        'title':'Paradise Beach',
        'description':'Idyllic white-sand, calm snorkeling',
        'images':['/assets/images/main/paradise_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':4,
        'latitude':11.19806,
        'longitude':119.37802
    },
    {
        'id':5,
        'category':'TXX,TXD',
        'title':'Ipil Beach (Pinagbuyutan Island)',
        'description':'Remote and tranquil',
        'images':['/assets/images/main/ipil_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':5,
        'latitude':11.119361,
        'longitude':119.39461
    },
    {
        'id':6,
        'category':'TXX,TXO',
        'title':'Bukal Island',
        'description':'Quiet, crystal-clear waters',
        'images':['/assets/images/main/bukal_island.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':6,
        'latitude':11.209071,
        'longitude':119.37817
    },
    {
        'id':7,
        'category':'TXX,TXO',
        'title':'Nacpan Beach',
        'description':'Long pristine twin beach with relaxed vibe',
        'images':['/assets/images/main/nacpan_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':7,
        'latitude':11.321176,
        'longitude':119.427492
    },
    {
        'id':8,
        'category':'TXX,TXO',
        'title':'Duli Beach',
        'description':'Surfing, peaceful, remote',
        'images':['/assets/images/main/duli_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':8,
        'latitude':11.352178,
        'longitude':119.46374
    },
    {
        'id':9,
        'category':'TXX,TXO',
        'title':'Las Cabanas',
        'description':'Sunset beach near town, facilities available',
        'images':['/assets/images/main/las_cabanas.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':9,
        'latitude':11.144816,
        'longitude':119.39432
    },
    {
        'id':10,
        'category':'TXX,TXO',
        'title':'Marimegmeg Beach',
        'description':'Accessible, scenic, family-friendly',
        'images':['/assets/images/main/marimegmeg_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':10,
        'latitude':11.146756,
        'longitude':119.396824
    },
    {
        'id':11,
        'category':'TXX,TXO',
        'title':'Ipil Ipil Beach',
        'description':'Wild, kayaking needed',
        'images':['/assets/images/main/ipil_ipil_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':11,
        'latitude':11.181379,
        'longitude':119.374978
    },
    {
        'id':12,
        'category':'TXX,TXO',
        'title':'Entalula Island',
        'description':'Calm, beautiful, limited access',
        'images':['/assets/images/main/entalula_island.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':12,
        'latitude':11.127685,
        'longitude':119.336004
    },
    {
        'id':14,
        'category':'TXX,TXA',
        'title':'Big Lagoon',
        'description':'',
        'images':['/assets/images/main/big_lagoon.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':13,
        'latitude':11.153996,
        'longitude':119.321305
    },
    {
        'id':15,
        'category':'TXX,TXA',
        'title':'Secret Lagoon',
        'description':'',
        'images':['/assets/images/main/secret_lagoon.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':14,
        'latitude':11.145513,
        'longitude':119.312817
    },
    {
        'id':16,
        'category':'TXX,TXA',
        'title':'Payong Payong Beach',
        'description':'',
        'images':['/assets/images/main/payong_payong_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':15,
        'latitude':11.144914,
        'longitude':119.321252
    },
    {
        'id':17,
        'category':'TXX,TXB',
        'title':'Snake Island',
        'description':'',
        'images':['/assets/images/main/snake_island.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':16,
        'latitude':11.094294,
        'longitude':119.340736
    },
    {
        'id':18,
        'category':'TXX,TXB',
        'title':'Cathedral Cave',
        'description':'',
        'images':['/assets/images/main/cathedral_cave.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':17,
        'latitude':11.076184,
        'longitude':119.384688
    },
    {
        'id':19,
        'category':'TXX,TXB',
        'title':'Cudugnon Cave',
        'description':'',
        'images':['/assets/images/main/cudugnon_cave.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':18,
        'latitude':11.084404,
        'longitude':119.352522
    },
    {
        'id':21,
        'category':'TXX,TXC',
        'title':'Helicopter Beach',
        'description':'',
        'images':['/assets/images/main/helicopter_island.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':20,
        'latitude':11.196416,
        'longitude':119.338505
    },
    {
        'id':22,
        'category':'TXX,TXC',
        'title':'Secret Beach',
        'description':'',
        'images':['/assets/images/main/secret_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':21,
        'latitude':11.17743,
        'longitude':119.28072
    },
    {
        'id':23,
        'category':'TXX,TXC',
        'title':'Talisay Beach',
        'description':'',
        'images':['/assets/images/main/talisay_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':22,
        'latitude':11.194524,
        'longitude':119.270056
    },
    {
        'id':24,
        'category':'TXX,TXC',
        'title':'Star Beach',
        'description':'',
        'images':['/assets/images/main/star_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':23,
        'latitude':11.202951,
        'longitude':119.26969
    },
    {
        'id':25,
        'category':'TXX,TXD',
        'title':'Small Lagoon',
        'description':'',
        'images':['/assets/images/main/small_lagoon.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':24,
        'latitude':11.156388,
        'longitude':119.321678
    },
    {
        'id':26,
        'category':'TXX,TXD',
        'title':'Cadlao Lagoon',
        'description':'',
        'images':['/assets/images/main/cadlao_lagoon.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':25,
        'latitude':11.214685,
        'longitude':119.342874
    },
    {
        'id':27,
        'category':'TXX,TXD',
        'title':'Pasandigan Beach',
        'description':'',
        'images':['/assets/images/main/pasandigan_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':26,
        'latitude':11.208267,
        'longitude':119.357306
    },
    {
        'id':28,
        'category':'TXX,TXD',
        'title':'Natnat Beach',
        'description':'',
        'images':['/assets/images/main/natnat_beach.jpeg'],
        'mapLogo':'/assets/images/map/pin.svg',
        'sort':27,
        'latitude':11.205574,
        'longitude':119.363561
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
