import { Component, Input } from '@angular/core';

@Component({
  selector: 'top10-list',
  imports: [],
  templateUrl: './top10-list.component.html',
  styleUrl: './top10-list.component.sass',
})
export class Top10ListComponent {
  @Input() category: string;

  constructor() {
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

  moveItemUp(item: any) {
    console.log('Moving item up:', item);
    // Logic to move the item up in the list
  }
  moveItemDown(item: any) {
    console.log('Moving item down:', item);
    // Logic to move the item down in the list
  }
}
