import { Component } from '@angular/core';
import { BootstrapAlertService, BootstrapAlert, AlertType } from './modules/ng-bootstrap-alert/ng-bootstrap-alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    position: string;
    
    constructor( private bootstrapAlertService: BootstrapAlertService ){}
    
    alert(position: string): void {
        this.position = position;
        this.bootstrapAlertService.alert(new BootstrapAlert("BootstrapAlert Message!", "alert-success"));
    }
    
}
