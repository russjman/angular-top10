export class Top10Item {
  // Constructor to initialize the properties
  constructor(
    public name: string,
    public category: 'movie' | 'tv' | 'anime' | 'music' | 'book',
    public id?: string,
    public description?: string,
    public imageUrl?: string,
    public link?: string
  ) {
    // You can add any additional initialization logic here if needed
  }
}

export class Top10ListItem {
  constructor(
    id: string,
    ItemId: string,
    notes: string,
    rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    category: string,
    item: Top10Item
  ) {}
}
