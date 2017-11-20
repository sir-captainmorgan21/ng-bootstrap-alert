export interface BootstrapAlertInterface {
    message: string;
    timeoutInMiliSeconds: number;
    type: AlertType;
    uuid: string;
    state: string;
}

export type AlertType = "alert-danger" | "alert-success" | "alert-info" | "alert-warning";

export class BootstrapAlert implements BootstrapAlertInterface {
    private _message: string;
    private _timeoutInMiliSeconds: number;
    private _type: AlertType;
    private _uuid: string;
    private _state: string;

    constructor( message: string, type: AlertType ) {
        this._uuid = this.generateUUId();
        this._type = type;
        this._message = message;
        this._state = 'visible';
    }

    private generateUUId() {
        return this.randomizer() + this.randomizer() + '-' + this.randomizer() + '-' + this.randomizer() + '-' +
            this.randomizer() + '-' + this.randomizer() + this.randomizer() + this.randomizer();
    }

    private randomizer() {
        return Math.floor(( 1 + Math.random() ) * 0x10000 ).toString( 16 ).substring( 1 );
    }

    public get message(): string {
        return this._message;
    }

    public set message( message: string ) {
        this._message = message;
    }

    public get timeoutInMiliSeconds(): number {
        return this._timeoutInMiliSeconds;
    }

    public set timeoutInMiliSeconds( timeoutInMiliSeconds: number ) {
        this._timeoutInMiliSeconds = timeoutInMiliSeconds;
    }

    public get type(): AlertType {
        return this._type;
    }

    public set type( type: AlertType ) {
        this._type = type;
    }

    public get uuid(): string {
        return this._uuid;
    }

    public get state(): string {
        return this._state;
    }

    public set state( state: string ) {
        this._state = state;
    }
}