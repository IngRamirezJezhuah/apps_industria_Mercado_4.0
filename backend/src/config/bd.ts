import { promises } from "dns";
import mongoose, { Mongoose } from "mongoose";
                //usuario,ruta,nombre de la bd, en la ruta se debe ir acomodando, de acuerdo a como se va haciendo
const mongoUrl= process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';
//const mongoUrl= process.env.MONGO_URL || 'mongodb://admin:admin@0.0.0.0:27017/proyecto?authSource=admin';

const connectDB = async (): Promise<void> => {
    try{
        await mongoose.connect(mongoUrl);
        console.log("MongoDB connected successfully ( ദി ˙ᗜ˙ )");
    }catch (error) {
        console.log("MongoDB connection failed:", error);
    }

}

export default connectDB;