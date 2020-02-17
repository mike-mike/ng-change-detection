import { Component } from '@angular/core';

@Component({
  selector: 'app-track-by-change-detection',
  templateUrl: './track-by-change-detection.component.html',
  styleUrls: ['./track-by-change-detection.component.css']
})
export class TrackByChangeDetectionComponent {

  items: any[] = [{ id: 1, count: 1 }, { id: 2, count: 2 }, { id: 3, count: 3 }];

  constructor() {

  }

  getArray() {
    this.items = [{ id: 1, count: 1 }, { id: 2, count: 6 }, { id: 3, count: 7 }];
  }

  trackItem(index, item){
    return item ? item.id : undefined;
  }

  checkAll(){
    document.querySelectorAll("input[type=checkbox]").forEach((chk: any)=>{
      chk.checked = true;
    })
  }
}
