import { Component, ElementRef, Input } from '@angular/core';
import { BootstrapAlert, BootstrapAlertInterface } from './bootstrap-alert';
import { BootstrapAlertService } from './bootstrap-alert.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component( {
    selector: 'bootstrap-alert',
    templateUrl: 'bootstrap-alert.component.html',
    styleUrls: ['bootstrap-alert.component.css'],
    animations: [
        trigger( 'alertVisible', [
            state( 'visible', style( { opacity: 1 } ) ),
            state( 'destroyed', style( { opacity: 0 } ) ),
            transition( 'visible => destroyed', animate( '600ms' ) ),
            transition( 'destroyed => visible', animate( '600ms' ) ),
        ] )
    ]
} )

export class BootstrapAlertComponent {

    @Input() alertPosition: string;

    bootstrapAlerts: Array<BootstrapAlertInterface>;

    constructor( private bootstrapAlertService: BootstrapAlertService ) {

        this.bootstrapAlerts = [];
        this.bootstrapAlertService._bootstrapAlert.subscribe(
            ( bootstrapAlert: BootstrapAlertInterface ) => {
                this.show( bootstrapAlert );
            }
        );

    }

    readonly DEFAULT_TIMEOUT = 3000;
    readonly FADE_TIMEOUT = 600;

    show( bootstrapAlert: BootstrapAlertInterface ): void {
        if ( !bootstrapAlert )
            return;

        this.bootstrapAlerts.unshift( bootstrapAlert );

        setTimeout(
            () => {
                this.destroy( bootstrapAlert.uuid )
            }, bootstrapAlert.timeoutInMiliSeconds ? bootstrapAlert.timeoutInMiliSeconds : this.DEFAULT_TIMEOUT
        )
    }
    
    fade( bootstrapAlert): void {
        bootstrapAlert.state = 'destroyed';
    }

    destroy( uuid: string ): void {
        let bootstrapAlertIndex = this.findIndex( this.bootstrapAlerts, 'uuid', uuid );
        if ( bootstrapAlertIndex !== -1 ) {
            let bootstrapAlert = this.bootstrapAlerts[bootstrapAlertIndex];
            bootstrapAlert.state = 'destroyed';
            setTimeout(
            () => {
                this.bootstrapAlerts.splice( bootstrapAlertIndex, 1 );
            }, this.FADE_TIMEOUT
            )
        }
    }
    
    findIndex(array, attr, value): number {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

}