import { model,Schema,Types } from "mongoose";

export interface Iproduct extends Document{
    id: Types.ObjectId,
    name:string,
    price:string,
    qty:string,
    status:boolean,
    desc:string,
    createdate:Date,
    deletedate:Date,
}
/*name:string,
    price:string,
    qty:string,requerido*/

const productSchema= new Schema<Iproduct>({
    name:{
        type: String,
        required:true,
        unique: true,
    },
    price:{
        type: String,
        required:true,
        unique: true,
    },
    qty:{
        type: String,
        required:true,
        unique: true,
    },
    status:{
        type: Boolean,
        default:true,
        index:true,
    },
    desc:{
        type: String,
        required:true,
    },
    createdate:{
        type: Date,
        default: Date.now,
    },
    deletedate:{
        type: Date,
    },
});

export const Product = model<Iproduct>('Product', productSchema, 'product')