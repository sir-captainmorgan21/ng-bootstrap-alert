import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { NgBootstrapAlert } from './ng-bootstrap-alert';
import { AlertType } from './ng-bootstrap-alert';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NgBootstrapAlertService {

    public _bootstrapAlert: BehaviorSubject<NgBootstrapAlert>;

    constructor() {
        this._bootstrapAlert = new BehaviorSubject<NgBootstrapAlert>( null );
    }

    public alert(alert: NgBootstrapAlert) {
        this._bootstrapAlert.next(alert);
    }

}
