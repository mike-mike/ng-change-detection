import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoneChangeDetectionComponent } from './zone-change-detection/zone-change-detection.component';
import { OnPushChangeDetectionComponent } from './on-push-change-detection/on-push-change-detection.component';
import { TrackByChangeDetectionComponent } from './track-by-change-detection/track-by-change-detection.component';
import { WithoutZoneChangeDetectionComponent } from './without-zone-change-detection/without-zone-change-detection.component';
import { DetachChangeDetectionComponent } from './detach-change-detection/detach-change-detection.component';

const routes: Routes = [
    
    { path: 'onpush', component: OnPushChangeDetectionComponent, pathMatch: 'full' },
    { path: 'zone', component: ZoneChangeDetectionComponent },
    { path: 'trackby', component: TrackByChangeDetectionComponent },
    { path: 'nozone', component: WithoutZoneChangeDetectionComponent },
    { path: 'detach', component: DetachChangeDetectionComponent },
    { path: '', redirectTo: '/zone', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
