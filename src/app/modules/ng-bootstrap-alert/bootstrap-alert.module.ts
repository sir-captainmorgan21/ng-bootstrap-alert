import { NgModule } from '@angular/core';
import { BootstrapAlertService } from './bootstrap-alert.service';
import { BootstrapAlertComponent } from './bootstrap-alert.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapAlert } from './bootstrap-alert';

@NgModule( {
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations: [
        BootstrapAlertComponent,
    ],
    exports: [
        BootstrapAlertComponent
    ],
    providers: [
        BootstrapAlertService,
    ]
} )

export class BootstrapAlertModule {}