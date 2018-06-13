import { Component, ElementRef, Input } from '@angular/core';
import { NgBootstrapAlert, NgBootstrapAlertInterface } from './ng-bootstrap-alert';
import { NgBootstrapAlertService } from './ng-bootstrap-alert.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component( {
    selector: 'ng-bootstrap-alert',
    templateUrl: 'ng-bootstrap-alert.component.html',
    styleUrls: ['ng-bootstrap-alert.component.css'],
    animations: [
        trigger( 'alertVisible', [
            state( 'visible', style( { opacity: 1 } ) ),
            state( 'destroyed', style( { opacity: 0 } ) ),
            transition( 'visible => destroyed', animate( '600ms' ) ),
            transition( 'destroyed => visible', animate( '600ms' ) ),
        ] )
    ]
} )

export class NgBootstrapAlertComponent {

    @Input() alertPosition: string;

    bootstrapAlerts: Array<NgBootstrapAlertInterface>;

    constructor( private bootstrapAlertService: NgBootstrapAlertService ) {

        this.bootstrapAlerts = [];
        this.bootstrapAlertService._bootstrapAlert.subscribe(
            ( bootstrapAlert: NgBootstrapAlertInterface ) => {
                this.show( bootstrapAlert );
            }
        );

    }

    readonly DEFAULT_TIMEOUT = 3000;
    readonly FADE_TIMEOUT = 600;

    show( bootstrapAlert: NgBootstrapAlertInterface ): void {
        if ( !bootstrapAlert ) {
            return;
        }
        this.bootstrapAlerts.unshift( bootstrapAlert );
        setTimeout(
            () => {
                this.destroy( bootstrapAlert.uuid );
            }, bootstrapAlert.timeoutInMiliSeconds ? bootstrapAlert.timeoutInMiliSeconds : this.DEFAULT_TIMEOUT
        );
    }

    fade( bootstrapAlert): void {
        bootstrapAlert.state = 'destroyed';
    }

    destroy( uuid: string ): void {
        const bootstrapAlertIndex = this.findIndex( this.bootstrapAlerts, 'uuid', uuid );
        if ( bootstrapAlertIndex !== -1 ) {
            const bootstrapAlert = this.bootstrapAlerts[bootstrapAlertIndex];
            bootstrapAlert.state = 'destroyed';
            setTimeout(
              () => {
                  this.bootstrapAlerts.splice( bootstrapAlertIndex, 1 );
              }, this.FADE_TIMEOUT
            );
        }
    }

    findIndex(array, attr, value): number {
        for (let i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

}
