import { Component, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-without-zone-change-detection',
  templateUrl: './without-zone-change-detection.component.html',
  styleUrls: ['./without-zone-change-detection.component.css']
})
export class WithoutZoneChangeDetectionComponent {
  items: any[] = [{ count: 1 }, { count: 2 }, { count: 3 }];

  constructor(private app: ApplicationRef) {

    setInterval(() => {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].count++;
      }
    }, 1000)
  }

  update() {
    this.app.tick();
  }
}