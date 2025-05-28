import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Top10Item } from '../top10-panel/top10Item';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-item-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-item-form.component.html',
  styleUrl: './add-item-form.component.sass',
})
export class AddItemFormComponent implements OnInit {
  @Input() category: any;
  @Output() addNewItem = new EventEmitter<Top10Item>();

  constructor() {}

  ngOnInit(): void {}
  newItemName = '';
  newItemDescription = '';

  addItem() {
    this.addNewItem.emit(
      new Top10Item(
        this.newItemName,
        this.category,
        '',
        this.newItemDescription
      )
    );
  }
}
