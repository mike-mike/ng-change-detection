import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZoneChangeDetectionComponent } from './zone-change-detection/zone-change-detection.component';
import { OnPushChangeDetectionComponent } from './on-push-change-detection/on-push-change-detection.component';
import { AppRoutingModule } from './app-routing.module';
import { TrackByChangeDetectionComponent } from './track-by-change-detection/track-by-change-detection.component';
import { WithoutZoneChangeDetectionComponent } from './without-zone-change-detection/without-zone-change-detection.component';
import { DetachChangeDetectionComponent } from './detach-change-detection/detach-change-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoneChangeDetectionComponent,
    OnPushChangeDetectionComponent,
    TrackByChangeDetectionComponent,
    WithoutZoneChangeDetectionComponent,
    DetachChangeDetectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
