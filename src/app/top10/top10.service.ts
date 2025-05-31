import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Top10Item, Top10ListItem } from './top10-panel/top10Item';

@Injectable({
  providedIn: 'root',
})
export class Top10Service {
  constructor() {}

  private http = inject(HttpClient);

  private getStandardOptions() {
    return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  }

  getItems() {
    return this.http.get('/assets/items.json', this.getStandardOptions());
  }

  getCategories() {
    return this.http.get('/assets/categories.json', this.getStandardOptions());
  }

  addItem(item: Top10Item) {
    const options = this.getStandardOptions();

    options.headers = options.headers.set(
      'Authentication',
      'Bearer token blah blah blah'
    );

    // Example of setting parameters in the request
    // not working....
    // options.params = new HttpParams({
    //   fromObject: {
    //     id: item.id,
    //     name: item.name,
    //     description: item.description,
    //     imageUrl: item.imageUrl,
    //     rank: item.rank,
    //   },
    // });

    return this.http.post('/assets/items.json', item, options);
  }

  addListItem(item: Top10ListItem) {
    const options = this.getStandardOptions();

    options.headers = options.headers.set(
      'Authentication',
      'Bearer token balabla'
    );

    return this.http.post('/assets/items.json', item, options);
  }
}
