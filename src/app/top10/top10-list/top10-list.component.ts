import { Component, Input } from '@angular/core';
import { Top10Item } from '../top10-panel/top10Item';
import { CommonModule } from '@angular/common';
import EventService from '../../../shared/EventService';

@Component({
  selector: 'top10-list',
  imports: [CommonModule],
  templateUrl: './top10-list.component.html',
  styleUrl: './top10-list.component.sass',
})
export class Top10ListComponent {
  @Input() category: string;
  @Input() list: Top10Item[] = []; // Input for the list of items

  constructor(private events: EventService) {
    this.category = ''; // Default category
  }

  ngOnInit(): void {
    // Initialize the selected category if not provided
    //  this.onCategoryChange(this.categories[0]);
  }

  saveList() {
    console.log('Saving the list with category:', this.category);
  }

  clearList() {
    console.log('Clearing the list');
  }

  moveItemUp(item: Top10Item) {
    console.log('Moving item up:', item);
    // Logic to move the item up in the list
  }
  moveItemDown(item: Top10Item) {
    console.log('Moving item down:', item);
    // Logic to move the item down in the list
  }

  deleteItem(index: number) {
    console.log('Deleting item:', index);
    // Logic to delete the item from the list
    this.events.emit('deleteItem', this.list[index]);
  }
}
