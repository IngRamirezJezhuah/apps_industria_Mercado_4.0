import { model,Schema,Types } from "mongoose";

export interface Irol extends Document{
    id: Types.ObjectId,
    name:string,
    status:boolean,
    type:string,
}
/*name:string,
    price:string,
    qty:string,requerido*/

const productSchema= new Schema<Irol>({
    name:{
        type: String,
        required:true,
        unique: true,
    },
    type:{
        type: String,
        required:true,
        unique: true,
    },

    status:{
        type: Boolean,
        default:true,
        index:true,
    },
});

export const Rol = model<Irol>('Rol', productSchema, 'rol03+')