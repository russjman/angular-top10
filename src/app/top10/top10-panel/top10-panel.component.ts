import { Component, OnInit } from '@angular/core';
import { Top10Item } from './top10Item';
import { CommonModule } from '@angular/common';
import { AddItemFormComponent } from '../add-item-form/add-item-form.component';
import { CategorySelectFieldComponent } from '../category-select-field/category-select-field.component';
import EventService from '../../../shared/EventService';
import { Top10Service } from '../top10.service';
import { Top10ItemComponent } from '../top10-item/top10-item.component';
import { Top10ListComponent } from '../top10-list/top10-list.component';
import { isArrayLike } from 'rxjs/internal/util/isArrayLike';

@Component({
  selector: 'top10Panel',
  imports: [
    Top10ItemComponent,
    AddItemFormComponent,
    CategorySelectFieldComponent,
    CommonModule,
    Top10ListComponent,
  ],
  templateUrl: './top10-panel.component.html',
  styleUrl: './top10-panel.component.sass',
})
export class Top10PanelComponent implements OnInit {
  constructor(events: EventService, private top10Service: Top10Service) {
    events.listen('deleteItem', (item: Top10Item) => {
      console.log('deleteItem: ', item);
      if (isArrayLike(this.top10Lists[this.category])) {
        this.top10Lists[this.category] = this.top10Lists[this.category].filter(
          (existingItem) => existingItem.id !== item.id
        );
        console.log('Item deleted: ', item);
      } else {
        console.log('No items to delete in category: ', this.category);
      }
    });
    events.listen('addListItem', (item: Top10Item) => {
      if (isArrayLike(this.top10Lists[this.category])) {
        const exists = this.top10Lists[this.category].some(
          (existingItem) => existingItem.id === item.id
        );
        if (!exists) {
          this.top10Lists[this.category].push(item);
          console.log('Item added: ', item);
        } else {
          console.log('Duplicate item not added: ', item);
        }
      } else {
        this.top10Lists[this.category] = [item];
        console.log('Item added to new category: ', item);
      }
      console.log('Updated top10Lists: ', this.top10Lists);
    });
  }

  ngOnInit(): void {
    this.top10Service.getItems().subscribe((data) => {
      console.log('items: ', data);

      this.items = data as Top10Item[];
      this.filteredItems = data as Top10Item[];
    });
    this.category = 'movies';
  }

  ranks: number[] = [];
  items: Top10Item[] = [];
  category: any;
  filteredItems: Top10Item[] = [];
  top10Lists: { [key: string]: Top10Item[] } = {};

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

  openAddItemForm = () => {
    console.log('openAddItemForm');
  };
}
