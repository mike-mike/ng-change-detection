import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-on-push-change-detection',
  templateUrl: './on-push-change-detection.component.html',
  styleUrls: ['./on-push-change-detection.component.css'],
})
export class OnPushChangeDetectionComponent {

  items: any[] = [{ count: 1 }, { count: 2 }, { count: 3 }];

  constructor(private cd: ChangeDetectorRef) {
    setInterval(()=>{
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].count++;
      }
    }, 1000)
  }

  showStatus() {
    this.cd.detectChanges();
  }

  checkAll() {
    document.querySelectorAll("input[type=checkbox]").forEach((chk: any) => {
      chk.checked = true;
    })
  }
}
