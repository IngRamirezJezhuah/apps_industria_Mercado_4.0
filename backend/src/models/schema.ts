import { model, Schema,Types } from "mongoose";

const menuSchema = new Schema<Imenu>({
    label:{
        type: String,
    },
    path:{
        type: String,
    },
    icon:{
        type: String,
    },
    roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
})