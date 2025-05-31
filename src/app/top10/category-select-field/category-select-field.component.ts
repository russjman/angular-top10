import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Top10Service } from '../top10.service';

@Component({
  selector: 'category-select-field',
  imports: [CommonModule, FormsModule],
  templateUrl: './category-select-field.component.html',
  styleUrl: './category-select-field.component.sass',
})
export class CategorySelectFieldComponent implements OnInit {
  @Input() category: any;
  @Output() categoryChange = new EventEmitter<any>();

  categories: string[] = [];

  constructor(private top10Service: Top10Service) {}

  ngOnInit(): void {
    // Initialize the selected category if not provided
    //  this.onCategoryChange(this.categories[0]);
    this.top10Service.getCategories().subscribe((data) => {
      console.log('categories: ', data);
      this.categories = data as string[];
      if (this.categories.length > 0 && !this.category) {
        this.category = this.categories[0]; // Set default category if none is selected
      }
    });
  }

  onCategoryChange(value: string) {
    console.log('Selected category: ', value);
    // Emit the selected category to the parent component
    this.category = value;
    this.categoryChange.emit(this.category);
  }

  onAddCategory() {
    console.log('Add category clicked');
  }

  onClearCategory() {
    console.log('Clear category clicked');
    // Clear the selected category
    this.category = '';
    this.categoryChange.emit(this.category);
  }
}
