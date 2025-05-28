import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'category-select-field',
  imports: [CommonModule, FormsModule],
  templateUrl: './category-select-field.component.html',
  styleUrl: './category-select-field.component.sass',
})
export class CategorySelectFieldComponent implements OnInit {
  @Input() category: any;
  @Output() categoryChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    // Initialize the selected category if not provided
    //  this.onCategoryChange(this.categories[0]);
  }

  categories: string[] = ['movies', 'tv', 'music', 'books'];

  onCategoryChange(value: string) {
    console.log('Selected category: ', value);
    // Emit the selected category to the parent component
    this.category = value;
    this.categoryChange.emit(this.category);
  }
}
