import { model,Schema,Types } from "mongoose";

export interface Iorder extends Document{
    id: Types.ObjectId,
    idUser: Types.ObjectId,
    status:boolean,
    createdate:Date,

}
/*name:string,
    price:string,
    qty:string,requerido*/

const orderSchema= new Schema<Iorder>({
    status:{
        type: Boolean,
        default:true,
        index:true,
    },
    createdate:{
        type: Date,
        default: Date.now,
    },
});

export const Order = model<Iorder>('Order', orderSchema, 'order')