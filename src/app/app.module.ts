import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgBootstrapAlertModule } from 'ng-bootstrap-alert';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgBootstrapAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
