import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { DeviceFormComponent } from './devices/device-form/device-form.component';
import { DeviceDetailsComponent } from './devices/device-details/device-details.component';

const routes: Routes = [
  { path: '', component: DevicesListComponent },
  { path: 'add', component: DeviceFormComponent },
  { path: 'details/:id', component: DeviceDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
