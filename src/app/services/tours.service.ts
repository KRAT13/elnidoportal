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
        imgLink: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t51.82787-15/527300957_17987249738844743_5434206519497307531_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSVRHGCsBXoyXZUA7NONYcxLIJZAL8DK_EsglkAvwMr_VClRxK_9rD9CuyPQI9-9DPVSyii3RB4ZjA3gTID0Dn&_nc_ohc=-UkGGdv86igQ7kNvwEWSe7H&_nc_oc=AdlL_rFII3EaW7tbLRlEa4kIzp1WU2skR0lzJSsyzy5_ywkTtr72MD6qGdVuDudqFnE&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=RLQEhQJ6RaC-WnYn5G5Exg&oh=00_AfWFIJFH4IlGpRt4xLOy-7PVGFsdssioQhmYgYZI65QESQ&oe=68982358'
    },
    { 
        code: 'B',
        name: 'Tour B',
        imgLink: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t51.82787-15/527300957_17987249738844743_5434206519497307531_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSVRHGCsBXoyXZUA7NONYcxLIJZAL8DK_EsglkAvwMr_VClRxK_9rD9CuyPQI9-9DPVSyii3RB4ZjA3gTID0Dn&_nc_ohc=-UkGGdv86igQ7kNvwEWSe7H&_nc_oc=AdlL_rFII3EaW7tbLRlEa4kIzp1WU2skR0lzJSsyzy5_ywkTtr72MD6qGdVuDudqFnE&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=RLQEhQJ6RaC-WnYn5G5Exg&oh=00_AfWFIJFH4IlGpRt4xLOy-7PVGFsdssioQhmYgYZI65QESQ&oe=68982358'
    },
    { 
        code: 'C',
        name: 'Tour C',
        imgLink: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t51.82787-15/527300957_17987249738844743_5434206519497307531_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSVRHGCsBXoyXZUA7NONYcxLIJZAL8DK_EsglkAvwMr_VClRxK_9rD9CuyPQI9-9DPVSyii3RB4ZjA3gTID0Dn&_nc_ohc=-UkGGdv86igQ7kNvwEWSe7H&_nc_oc=AdlL_rFII3EaW7tbLRlEa4kIzp1WU2skR0lzJSsyzy5_ywkTtr72MD6qGdVuDudqFnE&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=RLQEhQJ6RaC-WnYn5G5Exg&oh=00_AfWFIJFH4IlGpRt4xLOy-7PVGFsdssioQhmYgYZI65QESQ&oe=68982358'
    },
    { 
        code: 'D',
        name: 'Tour D',
        imgLink: 'https://scontent.fmnl13-2.fna.fbcdn.net/v/t51.82787-15/527300957_17987249738844743_5434206519497307531_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSVRHGCsBXoyXZUA7NONYcxLIJZAL8DK_EsglkAvwMr_VClRxK_9rD9CuyPQI9-9DPVSyii3RB4ZjA3gTID0Dn&_nc_ohc=-UkGGdv86igQ7kNvwEWSe7H&_nc_oc=AdlL_rFII3EaW7tbLRlEa4kIzp1WU2skR0lzJSsyzy5_ywkTtr72MD6qGdVuDudqFnE&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=RLQEhQJ6RaC-WnYn5G5Exg&oh=00_AfWFIJFH4IlGpRt4xLOy-7PVGFsdssioQhmYgYZI65QESQ&oe=68982358'
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
