import { Request,Response } from "express";
import { Order } from "../models/orderModel";

export const getAllOrders = async (req:Request,res:Response) => {
    try{
        const order = await Order.find({status:true});
        return res.status(200).json(order);
    } catch (error){
        return res.status(500).json({message:'ni pez esto vaina no jalo'})
    }
}