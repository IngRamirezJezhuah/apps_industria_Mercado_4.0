import { model, Schema, SchemaType, Types } from "mongoose";

export interface Iuser extends Document{
    id: Types.ObjectId, 
    username: string,
    email: string,
    password: string,
    status: boolean,
    createDate:Date,
    deleteDate: Date,
    role: string,
    firstName: string,
    lastName: string,
}

const userSchema= new Schema<Iuser>({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
    },
    status:{
        type: Boolean,
        default: true,
    },
    createDate:{
        type: Date,
        default: Date.now,
    },
    deleteDate:{
        type: Date,
    },
    role:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,        
    }
});

export const User = model<Iuser>('User', userSchema, 'user')

//tarea aparecer la conexion a mongo