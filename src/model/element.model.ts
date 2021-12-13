import { OrderState } from "./orderState.enum";

export class ElementModel {
    _id:string;
    _SAP: string;
    _producent: string;
    _artNr: string;
    _orderNr: string;
    _state: OrderState;
    _describe: string;
    _actualCount: number;
    _count: number;
    _deviceName: string;

    constructor(_id: string, _SAP: string, _producent: string,_artNr: string,_orderNr: string, _state:OrderState, _describe: string, _actualCount:number,_count: number, _deviceName: string) {
            this._id = _id;
            this._SAP = _SAP;
            this._producent = _producent;
            this._artNr = _artNr;
            this._orderNr = _orderNr;
            this._state = _state;
            this._describe = _describe;
            this._actualCount = _actualCount;
            this._count = _count;
            this._deviceName = _deviceName;
    }

    getId() {
        return "Id: " + this._id;
    }
}