import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-on-push-change-detection',
  templateUrl: './on-push-change-detection.component.html',
  styleUrls: ['./on-push-change-detection.component.css'],
})
export class OnPushChangeDetectionComponent {

  constructor() {
    setInterval(()=>{
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].count++;
      }
    }, 1000)
   }

  items: any[] = [{ count: 3 }, { count: 8 }, { count: 15 }];

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
