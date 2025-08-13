import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) return items;

    const lowerTerm = searchTerm.toLowerCase();

    return items.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(lowerTerm)
      )
    );
  }
}
