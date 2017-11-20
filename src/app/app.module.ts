import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapAlertModule } from './modules/ng-bootstrap-alert/ng-bootstrap-alert';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BootstrapAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
