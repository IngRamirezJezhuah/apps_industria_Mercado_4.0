import { Request,Response } from "express";
import { Rol } from "../models/rolModel";

export const getAllRols = async (req:Request,res:Response) => {
    try{
        const rol = await Rol.find({status:true});
        return res.status(200).json(rol);
    } catch (error){
        return res.status(500).json({messsage:'bueno pues no sirvio'})
    }
}