import { Component } from '@angular/core';

@Component({
  selector: 'app-zone-change-detection',
  templateUrl: './zone-change-detection.component.html',
  styleUrls: ['./zone-change-detection.component.css']
})
export class ZoneChangeDetectionComponent {
  items: any[] = [{ count: 1 }, { count: 2 }, { count: 3 }];

  constructor() { 

    setInterval(() => {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].count++;
      }
    }, 1000)
  }

  increaseCount() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].count++;
    }
  }

  getItems() {
    let newItems: any[] = [];

    for (let i = 0; i < this.items.length; i++) {
      newItems.push({ count: ++this.items[i].count })
    }

    this.items = newItems;
  }
}
