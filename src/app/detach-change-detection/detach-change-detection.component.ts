import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-detach-change-detection',
  templateUrl: './detach-change-detection.component.html',
  styleUrls: ['./detach-change-detection.component.css']
})
export class DetachChangeDetectionComponent {
  items: any[] = [{ count: 1 }, { count: 2 }, { count: 3 }];

  constructor(private ref: ChangeDetectorRef) {
    
    setInterval(() => {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].count++;
      }
    }, 1000)
  }

  detach(){
    this.ref.detach(); // deactivate change detection
  }

  attach() {
    this.ref.reattach(); // activate change detection
  }
}
