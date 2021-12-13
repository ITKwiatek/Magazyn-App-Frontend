import { ElementModel } from "./element.model";
import { OrderState } from "./orderState.enum";
import { Project } from "./project.model";

export class Order {
    _id: string;
    _orderNumber: number;
    _elements: Array<ElementModel>;
    _status: OrderState;
    _finishedInPercent: number;
    _dateOfTransfer: Date;
    _dateOfLastModification: Date;
    _dateOfDeadline: Date;
    _projectName: string;
    _projectId: string;
    _isActive: boolean;

    constructor(_id: string, _orderNumber:number, _elements: Array<ElementModel>, _status: OrderState, _finishedInPercent: number, _dateOfTransfer: Date, _dateOfLastModification:Date, _dateOfDeadline: Date, _projectName: string, _projectId: string, _isActive: boolean) {
        this._id = _id;
        this._orderNumber = _orderNumber,
        this._elements = _elements;
        this._status = _status;
        this._finishedInPercent = _finishedInPercent;
        this._dateOfTransfer = _dateOfTransfer;
        this._dateOfLastModification = _dateOfLastModification;
        this._dateOfDeadline = _dateOfDeadline;
        this._projectName = _projectName;
        this._projectId = _projectId;
        this._isActive = _isActive;
    }
}