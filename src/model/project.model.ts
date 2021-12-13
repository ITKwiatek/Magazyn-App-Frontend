import { Order } from "./order.model";

export class Project {
    _id: string;
    _name: string;
    _device: string;
    _orders: Array<Order>;

    constructor(_id: string, _name: string, _device: string, _orders: Array<Order>) {
        this._id = _id;
        this._name = _name;
        this._device = _device;
        this._orders = _orders;
    }
}