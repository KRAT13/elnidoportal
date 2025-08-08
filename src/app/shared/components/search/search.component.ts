import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  parentMessage = input<string[]>(['']);
  messageEvent = output<string>();

  private selectedCategory: string = '';
}
