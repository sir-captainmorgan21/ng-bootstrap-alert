import { Component } from '@angular/core';
import { NgBootstrapAlertService, NgBootstrapAlert } from 'ng-bootstrap-alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(private ngBootstrapAlertService: NgBootstrapAlertService) {}

  showAlert() {
    this.ngBootstrapAlertService.alert(new NgBootstrapAlert('This is an alert!', 'alert-success'));
  }

}
