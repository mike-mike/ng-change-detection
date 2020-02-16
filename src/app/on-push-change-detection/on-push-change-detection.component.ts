import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-on-push-change-detection',
  templateUrl: './on-push-change-detection.component.html',
  styleUrls: ['./on-push-change-detection.component.css'],
})
export class OnPushChangeDetectionComponent {

  items: any[] = [{ count: 1 }, { count: 2 }, { count: 3 }];

  constructor() {
    setInterval(()=>{
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].count++;
      }
    }, 1000)
  }

  showStatus() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].count++;
    }
  }
}
