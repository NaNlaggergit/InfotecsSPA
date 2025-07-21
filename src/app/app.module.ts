import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { DeviceFormComponent } from './devices/device-form/device-form.component';
import { DeviceDetailsComponent } from './devices/device-details/device-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesListComponent,
    DeviceFormComponent,
    DeviceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
