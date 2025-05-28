import { Component, OnInit } from '@angular/core';
import { Top10Item } from './top10Item';
import { CommonModule } from '@angular/common';
import { AddItemFormComponent } from '../add-item-form/add-item-form.component';
import { CategorySelectFieldComponent } from '../category-select-field/category-select-field.component';
import EventService from '../../../shared/EventService';
import { Top10Service } from '../top10.service';
import { Top10ItemComponent } from '../top10-item/top10-item.component';

@Component({
  selector: 'top10Panel',
  imports: [
    Top10ItemComponent,
    AddItemFormComponent,
    CategorySelectFieldComponent,
    CommonModule,
  ],
  templateUrl: './top10panel.component.html',
  styleUrl: './top10panel.component.sass',
})
export class Top10PanelComponent implements OnInit {
  constructor(events: EventService, private top10Service: Top10Service) {
    events.listen('deleteItem', (item: Top10Item) => {
      console.log('deleteItem: ', item);
    });
  }

  ngOnInit(): void {
    this.top10Service.getItems().subscribe((data) => {
      console.log('items: ', data);

      this.items = data as Top10Item[];
      this.filteredItems = data as Top10Item[];
    });
    this.ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.category = '';
  }

  ranks: number[] = [];
  items: Top10Item[] = [];
  category: any;
  filteredItems: Top10Item[] = [];

  addItem = (item: Top10Item) => {
    console.log('filterItems: ', item);
    this.items.push({ ...item, id: String(this.items.length + 1) });
    this.filterItems(this.category);
  };

  filterItems = (filter: string) => {
    console.log('filterItems: ', filter, this.items);
    this.category = filter;

    if (filter) {
      this.filteredItems = this.items.filter(
        (item) => item.category === filter
      );
    } else {
      this.filteredItems = this.items;
    }
  };
}
