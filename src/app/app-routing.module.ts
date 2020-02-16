import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoneChangeDetectionComponent } from './zone-change-detection/zone-change-detection.component';
import { OnPushChangeDetectionComponent } from './on-push-change-detection/on-push-change-detection.component';


const routes: Routes = [
    
    { path: 'onpush', component: OnPushChangeDetectionComponent, pathMatch: 'full' },
    { path: 'zone', component: ZoneChangeDetectionComponent },
    { path: '', redirectTo: '/zone', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
