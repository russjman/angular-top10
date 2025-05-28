import { Component, Input } from '@angular/core';
import { Top10Item } from '../top10-panel/top10Item';
import EventService from '../../../shared/EventService';

@Component({
  selector: 'top10-item',
  imports: [],
  templateUrl: './top10-item.component.html',
  styleUrl: './top10-item.component.sass',
})
export class Top10ItemComponent {
  @Input() item: Top10Item = {} as Top10Item;

  constructor(private events: EventService) {
    console.log('Top10ItemComponent constructor', this.item);
  }

  deleteItem() {
    this.events.emit('deleteItem', this.item);
  }
}
