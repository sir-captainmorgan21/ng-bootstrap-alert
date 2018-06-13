import { NgModule } from '@angular/core';
import { NgBootstrapAlertService } from './ng-bootstrap-alert.service';
import { NgBootstrapAlertComponent } from './ng-bootstrap-alert.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgBootstrapAlert } from './ng-bootstrap-alert';

@NgModule( {
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations: [
        NgBootstrapAlertComponent,
    ],
    exports: [
        NgBootstrapAlertComponent
    ],
    providers: [
        NgBootstrapAlertService,
    ]
} )

export class NgBootstrapAlertModule {}
